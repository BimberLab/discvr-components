# Turborepo

When adding a new workspace to the turborepo there are a few key steps that you need to take.
    - add the folder for the workspace some where in the repo. This can be in the root or in another folder like packages

    - add a package.json to that folder and add a name to that package. You will also want to add any scripts or dependencies that you want to include.

    - add the workspace file location to the package.json in root and make sure to add any scripts that arent already included.

    - From the root folder now run npm install to make sure turborepo recognizes your new workspace. 

    - If the new workspace has any scripts you can now run them from root using "turbo <Script Name>" or "turbo run <Script Name>"

# Changesets

When releasing packages you will need to run a few commands using changesets.
    - run "changeset". This will ask you some questions on what packages you want to release then the bump type for each of the packages.

    - run "changeset version". Updates the versions for all packages that you added when running changesets. This will also create/append to a CHANGELOG file for each package.

    - run "changeset publish". This publishes to NPM and creates github tags. This assumes the latest commit is the release comit and you should not commit any changes between version and publish. They are seperate so you can check and make sure the commit is correct before doing the final publish.