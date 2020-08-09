# My Setup
## Software
### Install Google Drive Sync and Dropbox
Takes forever to sync so...install it first
- [Google Drive](https://www.google.com/drive/download/)
	- Sign in as adz@nycitt.com
	- Go to Preferences, change Removing items to "Always remove both copies", check "Upload newly added photos and videos", click "Uploading photos and videos in..." and pick "High Quality"
 - [Dropbox](https://www.dropbox.com/downloading) 
   - Choose "Online only"
   - Choose "Selective Sync" and only sync "ALL->Recordings"
   - Drag `ALL/Recordings` to Finder sidebar

### App Store
- 1Password
	- Configure using iphone
	- Preferences->Security->Allow Touch ID
- Amphetamine
- WhatsApp
- SpeedTest
- Be Focused Pro
	- Open Settings and Log In (adz@nycit.com)
	- Launch at Startup
- Giphy Capture
- Moom
    - Go to General, uncheck "Show preferences on launch", check "Launch automatically on login"
 	- Configure Moom Settings
		- Command+Option+Left - left side
		- Command+Option+Right - right side
		- Command+Option+Up - full screen
	- Check Run as "Menu Application" in the main screen 
- XCode
	- Open Xcode and agree to license agreement
	- - Install command line tools `xcode-select --install`
- DayOne
	- Sign in using icloud
- Slack
- TheClock
- Numbers

### Download

- [Chrome](https://www.google.com/chrome/?brand=CHBD&gclid=CjwKCAiA8K7uBRBBEiwACOm4d-CR4CPqSUYJJhj8Fks_GWJeAjOJvcLZibwbbQTjiNl9CM1-1W5VgRoCXNkQAvD_BwE&gclsrc=aw.ds)
	- Login as toli@nycitt.com
	- TabCloud - open Main
- [HubStaff](https://app.hubstaff.com/download)
- [Docker](https://www.docker.com/products/docker-desktop)
- [Google Drive](https://www.google.com/drive/download/)
	- Sign in as adz@nycitt.com
	- Go to Preferences, change Removing items to "Always remove both copies", check "Upload newly added photos and videos", click "Uploading photos and videos in..." and pick "High Quality"
- [iTerm](https://www.iterm2.com/downloads.html)
	- [https://github.com/robbyrussell/oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)
	- `sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"`
	- `rm ~/.zshrc && ln -s ~/Google\ Drive/ALL\ -\ Toli/Config\ Files/.zshrc && source ~/.zshrc`
	- Install Powerline Fonts: 
	
		    git clone https://github.com/powerline/fonts.git --depth=1
			# install
			cd fonts
			./install.sh
			# clean-up a bit
			cd ..
			rm -rf fonts
	- In Iterm go to Preferences->Profiles->Text->Fonts and select "Droid Sans Mono Dotted for Powerline"
- [NVM](https://github.com/nvm-sh/nvm#installation-and-update) - 

	  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash
	  source ~/.zshrc
	  nvm install 12
- Install yarn `curl -o- -L https://yarnpkg.com/install.sh | bash`
- Install lerna
	- `npm i -g lerna`
- CodeFresh CLI
	- Get API Key From [here](https://g.codefresh.io/user/settings)

	- Install CodeFresh CLI `npm i -g codefresh`
	- Authenticate with key from previous step

		  codefresh auth create-context --api-key KEY_GOES_HERE
   - Go to "CodeFresh Registry Section" click generate and copy Docker login command and paste it in terminal
- [RescueTime](https://www.rescuetime.com/get_rescuetime)
	- Login as adz@nycitt.com
- [Sketch](https://sketchapp.com/get/)
- [Spotify](https://www.spotify.com/us/download/other/)
- [Tower](https://www.git-tower.com/download-TO2M)
	- License in 1Password
	- Choose Default to clone to: `~/Sites`
- [Visual Studio Code](https://code.visualstudio.com/)
	- Open Vscode Command Exec (Command + Shift + P) and then type ">install code" and press "Enter". This will install `code`
	- Go to Preferences->Settings->Type "font terminal" and paste "Droid Sans Mono Dotted for Powerline"
	- Use "Settings Sync" extension to sync [these settings](https://gist.github.com/tolicodes/05e150802f12d1e3c4ccfbe997f8b43f) login with Github and check "Auto Download", "Auto Upload", "Force Download", "Force Upload"  and type "Download Settings" in Console. Press "Shift+Alt+D" to sync
	- Extensions
		- Debugger for Chrome
		- ESlint
		- Prettier
		- Gitlens
		- Visual Studio IntelliCode
		- Auto Close Tag
		- Bracket Pair Colorizer
		- Auto Import
		- Auto Rename Tag
		- Code Spellc Checker
		- Cucumber
		- Git Blame
		- JSON Parse and Stringify
		- Markdown All In One
		- NPM Intellisense
		- Prettify JSON
		- YAML
- [Zoom](https://zoom.us/download)
	- Settings->Recording
		- Store recordings in Dropbox/ALL/Recordings
		- Choose location to save the recording to after meetings ends
		- Add timestamp
		- Record video during screen sharing->Place video next to shared screen
- [PostMan](https://www.getpostman.com/downloads/)
- [Install Brew](https://brew.sh/)
	`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`	
- Install `jq`
	`brew install jq`
- Install `hub`
	`brew install hub`
-[Install OBS](https://obsproject.com/download)
	- OBS->Preferences->Output->Recording->Recording Format select "mp4"
	- OBS->Preferences->Output->Record->Recording Path set to "/Users/toli/ToliCodes Dropbox/Anatoliy Zaslavskiy/ALL/Recordings"
	- OBS->Preferences->Video Both resolutions to 1920x1200
	- Setup Display recording + top left hand corner video scene
- Log into npm
	`npm login`

## Config
- System Preferences -> Displays -> Scaled for More Space
- Click On Battery -> Show Battery Percentage
- Go to System Preferences->Sound and check "Show volume in menu bar"
- System Preferences -> Energy Saver -> Power Adapter -> Turn Display Off after "Never", Uncheck "Put harddisks to sleep", uncheck "Enable power nap"
- Get rid of all the icons you don't use on the bottom bar
- Keep the following in the bottom bar
	- Google Chrome
	- OBS
	- HubStaff
	- iTerm
	- WhatsApp
	- Slack
	- Tower
	- VSCode
- Create `~/Sites` directory and drag it into favorites in finder
- Symlink config files from Google Drive (download it directly if it's not synced and you want to start working). Internally it links `.ssh`
	- `ln -s ~/Google\ Drive/ALL\ -\ Toli/Config\ Files/.zshrc && source ~/.zshrc`
- AWS Setup (originally [here](https://hoverinc.atlassian.net/wiki/spaces/EN/pages/886440263/AWS+Multi-Account+access)
	- Run

		  brew install aws-okta awscli aws-iam-authenticator
		  mkdir ~/.aws
	- Copy the following into `~/.aws/config`
	
			[okta]
			aws_saml_url=home/amazon_aws/0oa13zruhwnKvZc5u357/272
			 
			[profile legacy]
			region=us-east-1
			role_arn=arn:aws:iam::241884713626:role/Developer
			 
			[profile legacy-operator]
			region=us-east-1
			role_arn=arn:aws:iam::241884713626:role/Operator
			 
			[profile app-prod]
			region=us-east-1
			role_arn=arn:aws:iam::567347048851:role/Developer
			  
			[profile app-preprod]
			region=us-east-1
			role_arn=arn:aws:iam::550986622600:role/Developer
			  
			[profile app-playground]
			region=us-east-1
			role_arn=arn:aws:iam::205623263074:role/Developer
			 
			[profile logs]
			region=us-east-1
			role_arn=arn:aws:iam::053214610460:role/Developer
	- Run Okta setup

			aws-okta add
	 
			Okta organization: hover
			Okta region (us, emea, preview): <hit_enter_leaving_it_blank>
			Okta domain hover.okta.com: <hit_enter_leaving_it_blank>
			Okta username: <your_hover_email@hover.to>
			Okta password: <your_okta_password>
	- Setup expiration in `~/.zshrc`
- VPN Set up (originally [here]([https://hoverinc.atlassian.net/wiki/spaces/EN/pages/28049410/Setting+up+the+HOVER+VPN](https://hoverinc.atlassian.net/wiki/spaces/EN/pages/28049410/Setting+up+the+HOVER+VPN)
	- In "System Preferences ->  Preferences" add VPN as "L2TP over IPSec" 
	
		- **Server Address:** san-francisco-wired-whvwpznqkc.dynamic-m.com
		- **Type:** VPN L2TP over IpSec
		- **Shared Secret:** H0v3rH1gh
		- **username**: toli@hoverinc.com
		- **password**: (Password sent via Cisco Meraki) - search in email 
	
## Repos to Clone
1. `cd ~/Sites`
2. Clone personal repos

		git clone git@github.com:tolicodes/node-cli-toolkit.git
		git clone git@github.com:tolicodes/node-api-toolkit.git
		git clone git@github.com:tolicodes/dropbox-photo-viewer.git
		git clone git@github.com:tolicodes/souleclipse.us.git
		git clone git@github.com:tolicodes/principles.git
		git clone git@github.com:hoverinc/infragen.git
		
3.  Clone HOVER repos

		git clone git@github.com:hoverinc/design-pro-frontend.git
		git clone git@github.com:hoverinc/ks8-applications.git
		git clone git@github.com:hoverinc/website.git
		git clone git@github.com:hoverinc/developers.hover.to.git
		git clone git@github.com:hoverinc/hoverctl.git
		git clone git@github.com:hoverinc/cd-tools.git
		git clone git@github.com:hoverinc/machete.git
		git clone git@github.com:hoverinc/org_analytics.git
		git clone git@github.com:hoverinc/hyperion.git
		git clone git@github.com:hoverinc/billing-frontend.git
		git clone git@github.com:hoverinc/codefresh_qa.git
		git clone git@github.com:hoverinc/design-tokens.git
		git clone git@github.com:hoverinc/engineering.git
		git clone git@github.com:hoverinc/hover-javascript.git
		git clone git@github.com:hoverinc/picklejs.git
		git clone git@github.com:hoverinc/webapps.git
		git clone git@github.com:hoverinc/codefresh-test.git
		git clone git@github.com:hoverinc/rfc.git
		git clone git@github.com:hoverinc/developers.hover.to.git
		git clone git@github.com:hoverinc/front-end-fastify-server.git
		git clone git@github.com:hoverinc/hover-cli.git
		git clone git@github.com:hoverinc/developers.hover.to.git
		git clone git@github.com:tolicodes/public-notes.git

4. Yarn everything

       for f in ~/Sites/*
	   do cd $f && yarn 
	   done

## Online Tools
- Code Storage
	- GitHub - best experience, paid for private repos
	- Bitbucket - free unlimited private repos, limited colabs
	- GitLab - free unlimited repos, unlimited colab
- Time Tracking
	- Hubstaff 
- Project Management
 	- Trello: small projects/tasks
	- JIRA: big projects, big teams
	- Asana
- Scheduling
	- Calend.ly
- Jobs
	- CodeMentor
	- CodeMentor X  
- Hosting
	- Netlify - preferred, easy hosting, Node
	- Surge.sh - static website hosting
	- AWS - big application hosting
- Mockups
	- Invision
	- SketchUp - making mockups
- Analytics
	- HotJar - heatmaps
	- FullStory
	- Google Analytics
- Error Tracking
	- Rollbar
- Email Testing
	- Litmus
- Document Signing/Contracts
	- HelloSign

## JS Stack
- Node
- React
- React Native
- Redux
- Connected React Router
- StyledComponents
- Contentful - CMS
- Storybook
- create-react-app
- create-react-native-app
- Expo
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTI5MTAyMzE3OCwtNTAxOTEzNzAsLTE3Mz
QzMTE5OTQsLTM2NDI5NTk1OSw2MDUxNzYyMjMsNjAzMzMyNDVd
fQ==
-->