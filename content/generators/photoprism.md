- Create a Virtual Instance
- Choose Container OS > 86 Dev
- Allow HTTP and HTTPS traffic
- Add docker compose

    echo alias docker-compose="'"'docker run --rm \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v "$PWD:$PWD" \
    -w="$PWD" \
    docker/compose:1.24.0'"'" >> ~/.bashrc
- Create rclone locally (rclone configure)
- Copy file `~/.config/rclone/rclone.conf` onto server

    mkdir -p ~/config/rclone
    nano ~/config/rclone/rclone.conf

- Run rclone plugin

    docker plugin install sapk/plugin-rclone
    docker volume create --driver sapk/plugin-rclone --opt config="$(base64 ~/.config/rclone/rclone.conf)" --opt remote=dropbox: --name dropbox

- Copy `docker-compose.yml` to `nano docker-compose.yml`

```yml
    version: "3.3"

    # Example Docker Compose config file for PhotoPrism (Intel / AMD64)
    #
    # Documentation : https://docs.photoprism.org/getting-started/docker-compose/
    # Docker Hub URL: https://hub.docker.com/r/photoprism/photoprism/
    #
    # Please run behind a reverse proxy like Caddy, Traefik or Nginx if you need HTTPS / SSL support
    # e.g. when running PhotoPrism on a public server outside your home network.
    #
    # Usage: docker-compose up
      
    services:
      # rclone:
      #   image: rclone/rclone
      #   command: "mount dropbox: /data"
      #   devices:
      #     - /dev/fuse
      #   cap_add:
      #     - SYS_ADMIN
      #   security_opt:
      #     - apparmor:unconfined
      #   volumes:
      #     - dropbox:/data 
      #     - /etc/passwd:/etc/passwd:ro
      #     - /etc/group:/etc/group:ro
      #     - /home/toli/.config/rclone:/config/rclone
      photoprism:
        image: photoprism/photoprism:latest
        restart: unless-stopped
        ports:
          - 80:2342 # [local port]:[container port]
        devices:
          - /dev/fuse
        cap_add:
          - SYS_ADMIN
        security_opt:
          - apparmor:unconfined
        healthcheck: # Optional
          test: "photoprism status"
          interval: 60s
          timeout: 15s
          retries: 5
        environment: # Run "photoprism help" and "photoprism config" too see all config options and current values
          PHOTOPRISM_DEBUG: "false" # Run in debug mode (shows additional log messages)
          PHOTOPRISM_PUBLIC: "false" # No authentication required (disables password protection)
          PHOTOPRISM_READONLY: "false" # Don't modify originals directory (reduced functionality)
          PHOTOPRISM_UPLOAD_NSFW: "true" # Allow uploads that MAY be offensive
          PHOTOPRISM_DETECT_NSFW: "false" # Flag photos as private that MAY be offensive
          PHOTOPRISM_EXPERIMENTAL: "false" # Enable experimental features
          PHOTOPRISM_SITE_URL: "http://35.224.203.234/" # Canonical / public site URL
          PHOTOPRISM_SITE_TITLE: "PhotoPrism"
          PHOTOPRISM_SITE_CAPTION: "Browse Your Life"
          PHOTOPRISM_SITE_DESCRIPTION: ""
          PHOTOPRISM_SITE_AUTHOR: ""
          PHOTOPRISM_HTTP_HOST: "0.0.0.0"
          PHOTOPRISM_HTTP_PORT: 2342
          PHOTOPRISM_SETTINGS_HIDDEN: "false" # Users can not view or change settings
          PHOTOPRISM_ADMIN_PASSWORD: "photoprism" # Initial admin password (can be changed in settings)
          PHOTOPRISM_DATABASE_DRIVER: "sqlite" # Change to "mysql" for external MySQL or MariaDB
          # PHOTOPRISM_DATABASE_DRIVER: "mysql"          # Using MariaDB or MySQL instead of SQLite is optional
          # PHOTOPRISM_DATABASE_DSN: "user:passwd@tcp(photoprism-db:3306)/photoprism?charset=utf8mb4,utf8&parseTime=true"
          PHOTOPRISM_SIDECAR_JSON: "true" # Read metadata from JSON sidecar files created by exiftool
          PHOTOPRISM_SIDECAR_YAML: "true" # Backup photo metadata to YAML sidecar files
          PHOTOPRISM_THUMB_FILTER: "lanczos" # Resample filter, best to worst: blackman, lanczos, cubic, linear
          PHOTOPRISM_THUMB_UNCACHED: "false" # Enable on-demand thumbnail rendering (high memory and cpu usage)
          PHOTOPRISM_THUMB_SIZE: 2048 # Pre-rendered thumbnail size limit (default 2048, min 720, max 7680)
          # PHOTOPRISM_THUMB_SIZE: 4096                  # Retina 4K, DCI 4K (requires more storage); 7680 for 8K Ultra HD
          PHOTOPRISM_THUMB_SIZE_UNCACHED: 7680 # On-demand rendering size limit (default 7680, min 720, max 7680)
          PHOTOPRISM_JPEG_SIZE: 7680 # Size limit for converted image files in pixels (720-30000)
          PHOTOPRISM_JPEG_QUALITY: 92 # Set to 95 for high-quality thumbnails (25-100)
          PHOTOPRISM_DARKTABLE_PRESETS: "false" # Use darktable presets (disables concurrent raw to jpeg conversion)
          PHOTOPRISM_STORAGE_PATH: "/photoprism/storage" # Storage PATH for cache, settings and SQLite database
          PHOTOPRISM_DETECT_NSFW: "true"
        volumes:
          - "/photoprism/storage" # Keep cache and settings when upgrading or restarting
          # - "~/Pictures/Originals:/photoprism/originals" # [local path]:[container path]
          # - "~/Pictures/Import:/photoprism/import" # [local path]:[container path] (optional)
          - "dropbox:/photoprism/originals" # Map originals folder to its own volume.
    # Uncomment the following lines to use MariaDB instead of SQLite for improved performance & scalability:
    #
    #  photoprism-db:
    #    image: mariadb:10.5 # Alternatively mysql:8.0
    #    restart: unless-stopped
    #    command: mysqld --transaction-isolation=READ-COMMITTED --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci --max-connections=512 --innodb-rollback-on-timeout=OFF --innodb-lock-wait-timeout=50
    #    volumes:
    #      - "/var/lib/mysql"
    #    environment:
    #      MYSQL_ROOT_PASSWORD: photoprism
    #      MYSQL_USER: user
    #      MYSQL_PASSWORD: passwd
    #      MYSQL_DATABASE: photoprism

    # Uncomment the following lines to upgrade automatically whenever there are new images available:
    #
    #  watchtower:
    #    image: containrrr/watchtower
    #    restart: unless-stopped
    #    volumes:
    #      - "/var/run/docker.sock:/var/run/docker.sock"

    volumes:
      dropbox:
        external: true
```

- Start it: `docker-compose up -d`

- Index: `docker exec -ti toli_photoprism_1 photoprism index -d`



docker run -v test:/mnt --rm -ti ubuntu