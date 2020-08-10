```bash
##### Symlink Config #####
rm -rf ~/.ssh
ln -s ~/Google\ Drive/ALL\ -\ Toli/Config\ Files/.ssh ~/.ssh

  

##### oh my ZSH config #####

export ZSH="$HOME/.oh-my-zsh"

ZSH_THEME="agnoster"

plugins=(git)

source  "$HOME/.oh-my-zsh/oh-my-zsh.sh"

  

##### Node config #####

export NVM_DIR="$HOME/.nvm"

[ -s "$NVM_DIR/nvm.sh" ] && \.  "$NVM_DIR/nvm.sh"  # This loads nvm

[ -s "$NVM_DIR/bash_completion" ] && \.  "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

export PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"

  

##### GIT #####

# Git Config

git config --global user.name "Anatoliy Zaslavskiy"

git config --global user.email "toli@tolicodes.com"

  

# git current branch

function  current_branch() {

git branch | awk '/^\* / { print $2 }'

}

  

function  has_upstream() {

branch=$(test $1  &&  echo  $1  || current_branch)

upstream=$(git ls-remote origin $branch)

test  $upstream && echo  "TRUE"

}

  

function  has_no_upstream() {

[[ ! $(has_upstream) ]]

}

  

function  git_set_upstream() {

has_no_upstream && git push --set-upstream origin $(current_branch)

}

  

# https://gist.github.com/joechrysler/6073741

function  git_parent_branch() {

git show-branch -a \

| grep '\*' \

| grep -v `git rev-parse --abbrev-ref HEAD` \

| head -n1 \

| sed 's/.*\[\(.*\)\].*/\1/' \

| sed 's/[\^~].*//'

}

  

function  git_root_folder() {

git rev-parse --show-toplevel

}

  

function  git_repo_name() {

url=$(basename $(git config --get remote.origin.url))

echo  ${url//\.git/}

}

  

# Git Alisases

alias gl='git log --pretty=format:"%C(yellow)%h\\ %ad%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate --date=short'

alias g-log-pretty=gl

  

alias ga='git add'

alias g-add=ga

  

alias gd='git diff'

alias g-diff=gd

  

alias gs='git status -s'

alias g-status=gs

  

alias gco='git checkout'

alias g-checkout=gco

  

alias gcom='git checkout master'

alias g-checkout-master=gcom

  

# checkout branch and push it up

function  gcob() {

git checkout -b $1

git_set_upstream

}

alias git-checkout-new-branch-and-push=gcob

  

# checkout branch based on master

function  gcobm() {

gco master

gr

gcob $1

}

alias git-checkout-new-branch-from-master-and-push=gcobm

  

# checks out branch in new folder and opens it in vscode

function  gcoc() {

current_repo_folder=$(git_root_folder)

new_repo_folder="../$(git_repo_name)-$1"

cp -R "$current_repo_folder"  "$new_repo_folder"

cd  $new_repo_folder

gr

echo  "checking out $new_repo_folder with branch $1"

gco $1

cd  $current_repo_folder

code $new_repo_folder

}

alias git-checkout-copy=gcoc

  

alias gpp='git pull origin $(git_parent_branch)'

alias gc='git commit -m'

alias grm='git fetch && git rebase master'

alias gr='git reset --hard && git clean -fdx'

alias gs="git status"

alias ghb="hub browse"

alias gca="git commit --amend --no-edit"

alias gt="git log --color --date-order --graph --oneline --decorate --simplify-by-decoration --branches"

alias gta="git log --color --date-order --graph --oneline --decorate --simplify-by-decoration --all"

  

# git branch rename

function  gbrn() {

branch=$(current_branch)

git branch -m $1

test  $(has_upstream) && git push origin --delete $branch

gpp

}

alias git-branch-rename=gbrn

alias git-rename-branch=gbrn

  

function  gp() {

git_set_upstream

test  $1 && git pull origin $1 || git pull

}

  

function  grp() {

git rebase $(git_parent_branch)

}

  

# Creates a PR against the branch you branched from

function  pr() {

gf

gpp

last_commit_message=$(git log -1 --pretty=%B)

echo  $last_commit_message

hub pull-request -b master -o -m $last_commit_message

}

  

# git delete current branch remotely and locally and switch to master

function  gdb() {

branch=$(test $1  &&  echo  $1  || current_branch)

branch_has_upstream=$(has_upstream $branch)

test ! $1 && gcom

test  $branch_has_upstream && git push origin --delete $branch

git branch -D $branch

}

  

# git push and pull

function  gpp() {

git_set_upstream

git pull

git push

}

  

# git pull and force push

function  gfp() {

git_set_upstream

git push -f

}

  

# add, commit push

function  gacp() {

git add .

git commit -m $1

git_set_upstream

git push

}

  

# add, commit ammend, push

function  gacap() {

git add .

gca

git_set_upstream

git push -f

}

  

aliias='git-add-amend-commit-push'

  

# add, commit push, pr

function  gacpp() {

gacp $1

echo  "yooo"

pr

}

  

# git reset to HEAD x commits

function  grc() {

git reset --hard "HEAD~$1"

}

  

##### Docker #####

function  nukeDocker () {

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

function  kill_on_port() {

lsof -iTCP:$1 | grep LISTEN | awk '{ print $2 }' | xargs kill

}

  

##### Project Shortcuts #####

function  go() {

# ex: @infragen/cli would look in ~/Sites/infragen for packages named cli

# and switch there

if [[ $1 == *"@"* ]]

then

rootPkg=$(echo $1  | cut -d\/ -f1 | tr -d '@')

  

cd ~/Sites/$rootPkg

  

projects=$(lerna ls -l --json)

location=$(echo $projects  | jq --raw-output ".[] | select(.name==\"$1\") | .location")

  

cd  "$location"

else

case  $1  in

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
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTExMzQ3ODIzNTddfQ==
-->