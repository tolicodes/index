##### Symlink SSH Keys to Google Drive #####
# This is useful for keeping your ssh keys shared across computers. 
# Just put your ssh keys in your Google drive

rm -rf ~/.ssh
CONFIG_LOCATION="$HOME/Google Drive/ALL - Toli/Config Files"
ln -s "$CONFIG_LOCATION/.ssh" ~/.ssh

rm -rf ~/.keys
ln -s "$CONFIG_LOCATION/.keys" ~/.keys
source ~/.keys

##### oh my ZSH config ##### 
export ZSH="$HOME/.oh-my-zsh"
ZSH_THEME="agnoster" # pretty theme :)
plugins=(git) # shows which branch you're on and status
source "$HOME/.oh-my-zsh/oh-my-zsh.sh"

##### Node config #####
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

##### Yarn Config ######
export PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"

##### GIT #####
# User Config
git config --global user.name "Anatoliy Zaslavskiy"
git config --global user.email "toli@tolicodes.com"

# Get current branch name
function current_branch() {
  git branch | awk '/^\* / { print $2 }'
}

# Does the repo have an upstream set?
function has_upstream() {
  branch=$(test $1 && echo $1 || current_branch)
  upstream=$(git ls-remote origin $branch)
  test $upstream && echo "TRUE"
}

# The repo does not have an upstream set?
function has_no_upstream() {
  [[ ! $(has_upstream) ]]
}

# Sets upstream if there is no upstream to the current branch name
function git_set_upstream() {
  has_no_upstream && git push --set-upstream origin $(current_branch)
}

# Gets the branch that this was branched off of
# https://gist.github.com/joechrysler/6073741
function git_parent_branch() {
  git show-branch -a \
    | grep '\*' \
    | grep -v `git rev-parse --abbrev-ref HEAD` \
    | head -n1 \
    | sed 's/.*\[\(.*\)\].*/\1/' \
    | sed 's/[\^~].*//'
}

# Gets the root folder for the repo
function git_root_folder() {
  git rev-parse --show-toplevel
}

# Gets the repo name
function git_repo_name() {
  url=$(basename $(git config --get remote.origin.url))
  echo ${url//\.git/}
}

# checks out branch in new folder and opens it in vscode
function gcoc() {
  current_repo_folder=$(git_root_folder)
  new_repo_folder="../$(git_repo_name)-$1"
  cp -R "$current_repo_folder" "$new_repo_folder"
  cd $new_repo_folder
  gr
  echo "checking out $new_repo_folder with branch $1"
  gco $1
  cd $current_repo_folder
  code $new_repo_folder
}
alias git-checkout-copy=gcoc

# checkout new branch and push it up
# example gcob new-branch
function gcob() {
  git checkout -b $1
  git_set_upstream
}
alias git-checkout-new-branch-and-push=gcob

# checkout new branch based on master
# example gcob new-branch
function gcobm() {
  gco master
  gr
  gcob $1
}
alias git-checkout-new-branch-from-master-and-push=gcobm

# git branch rename
function gbrn() {
  branch=$(current_branch)
  git branch -m $1
  test $(has_upstream) && git push origin --delete $branch
  gpp
}
alias git-branch-rename=gbrn
alias git-rename-branch=gbrn

# Git Pull from another branch or same branch
# gp = git pull
# gp other-branch  = git pull origin other-branch
function gp() {
  git_set_upstream
  test $1 && git pull origin $1 || git pull
}
alias git-pull=gp

# Git Rebase with the parent branch (useful if someone worked on
# it and you need to pull in the changes
function grp() {
  git rebase $(git_parent_branch)
}
alias git-rebase-parent=grp

# Creates a PR against master
function pr() {
  gf #fetch
  gpp # push and oull
  last_commit_message=$(git log -1 --pretty=%B) # last commit is name of pr
  hub pull-request -b master -o -m $last_commit_message
}
alias git-pr=pr

# git delete current branch remotely and locally and switch to master
function gdb() {
  branch=$(test $1 && echo $1 || current_branch)
  branch_has_upstream=$(has_upstream $branch)
  
  test ! $1 && gcom
  test $branch_has_upstream && git push origin --delete $branch
  git branch -D $branch
}
alias git-delete-branch=gdb

# git push and pull
function gpp() { 
  git_set_upstream
  git pull
  git push
}
alias git-pull-push=gpp

# git force push
function gfp() { 
  git_set_upstream
  git-pull-push -f
}
alias git-force-push=gfp

function git-stash-rebase () {
  [[ $1 == '-r' ]] && \
    git add . && git rebase --continue || \
    { git stash --include-untracked && \
      { git fetch && git rebase origin/$(current_branch) || { echo "Merge files then run gacap -r" && return 1 } } && \
      git stash apply || { echo "Merge files then run gacap -r" && return 1 } }
}

# add, commit push
function gacp() {
  git-stash-rebase $1 || { echo "fail" && return 1 }
  git add .
  [[ $1 ]] && git commit -m $1 || git commit
  git_set_upstream
  git push
}
alias git-add-commit-push=gacp

# add, commit ammend, push
function gacap() {
  git-stash-rebase $1 || { echo "fail" && return 1 }
  git add .
  HUSKY_SKIP_HOOKS=1 git commit --amend --no-edit # Needs to be run inline for some reason
  git_set_upstream
  git push -f
}
alias git-add-amend-commit-push=gacap

# add, commit push, pr
function gacpp() {
  gacp $1
  pr
}
alias git-add-amend-commit-push-pr=gacapp

# git reset to HEAD x commits
function grc() {
  git reset --hard "HEAD~$1"
}
alias git-reset-number-commits=grc

# Pretty Git log
alias gl='git log --pretty=format:"%C(yellow)%h\\ %ad%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate --date=short'
alias git-log-pretty=gl

# Git Add
alias ga='git add'
alias git-add=ga

# Git Diff
alias gd='git diff'
alias git-diff=gd

# Git Status
alias gs='git status -s'
alias git-status=gs

# Git Checkout
alias gco='git checkout'
alias git-checkout=gco

# Git Checkout Master
alias gcom='git checkout master'
alias git-checkout-master=gcom

# Git  Commit 
alias gc='git commit -m'
alias git-commit=gc

# Git rebase Master
alias grm='git fetch && git rebase master'
alias git-rebase-master=grm

# Git reset and clean
alias gr='git reset --hard && git clean -fdx'
alias git-reset=gr

# Git status
alias gs="git status"
alias git-status=gs

# Browse Github Repo
alias ghb="hub browse"
alias git-github-browse=ghb

# Git Ammend
function gca () {
  HUSKY_SKIP_HOOKS=1 git commit --amend --no-edit
}
alias git-commit-amend-no-edit=gca

# Git Tree
alias gt="git log --color --date-order --graph --oneline --decorate --simplify-by-decoration --branches"
alias git-tree=gt

# Git tree all
alias gta="git log --color --date-order --graph --oneline --decorate --simplify-by-decoration --all"
alias git-tree-all=gta

##### Docker #####
function nukeDocker () {
  # Stop all containers
  docker stop `docker ps -qa`

  # Remove all containers
  docker rm `docker ps -qa`

  # Remove all images
  docker rmi -f `docker images -qa `

  # Remove all volumes
  docker volume rm $(docker volume ls -qf)

  # Remove all networks
  docker network rm `docker network ls -q`
}

## Kill on Port
function kill_on_port()  {
  lsof -iTCP:$1 | grep LISTEN | awk '{ print $2 }' | xargs kill
}

##### Project Shortcuts #####
function go() {
  # ex: @infragen/cli would look in ~/Sites/infragen for packages named cli
  # and switch there
  if [[ $1 == *"@"* ]]
  then
    rootPkg=$(echo $1 | cut -d\/ -f1 | tr -d '@')

    cd ~/Sites/$rootPkg

    projects=$(lerna ls -l --json)
    location=$(echo $projects | jq --raw-output ".[] | select(.name==\"$1\") | .location") 

    cd "$location"
  else
    case $1 in
      "specialCase") cd specialCasePath ;;

      # all other cases just get the project in sites
      *) cd ~/Sites/$1 ;;
    esac
  fi
}

#### ALIASES ####
alias sz='source ~/.zshrc'
alias tree='npx dree parse . --show && rm tree.txt'

##### AWS Timeouts #####
export AWS_SESSION_TTL=12h
export AWS_ASSUME_ROLE_TTL=12h
