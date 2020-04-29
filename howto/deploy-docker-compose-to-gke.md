1. Install [gloud-cli](./install-gloud-cli.md)
2. Login to `gcloud`

   ```bash
   gcloud auth login
   ```

3. Get your project ID by going to the [gcloud console](https://console.cloud.google.com/) clicking on the project name in the top dropdown and copying it from the `ID` column in the modal
4. Set the project

   ```
   cloud config set project <the project id>
   ```

5. In the gcloud console, go to Kubernetes Engine > Clusters and click "connect" next to your cluster
6. Login to `kubctl` for that cluster locally by copy and pasting the command that's listed. Something like
   ```
   gcloud container clusters get-credentials [cluster name] --zone [zone] --project [project]
   ```
7. Enable using the [local certificate to login](https://github.com/kubernetes/kubernetes/issues/30617)

   ```
   gcloud config set container/use_client_certificate True
   ```

8. Install `kompose`
   ```
   brew install kompose
   ```
9. Make sure your project has a `docker-compose.yml`
10. Run:

```
kompose up
```
