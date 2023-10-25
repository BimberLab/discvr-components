# Turborepo
This branch contains the start of a TurboRepo setup.

Currently the branch mainly holds default Turborepo example workspaces that will later be deleted. These files can be used as refrences for now
    - ./apps/docs
    - ./apps/web
    - ./packages/eslint-config-custom
    - ./packages/tsconfig
    - ./packages/ui

There are some empty package workspaces that have been added that will be added to later. 
    - ./packages/discvr-jbrowse
    - ./packages/discvr-ui-components
    - ./packages/discvr-utils

When adding a new workspace to the turborepo there are a few key steps that you need to take.
    - add the folder for the workspace some where in the repo. This can be in the root or in another folder like packages

    - add a package.json to that folder and add a name to that package. You will also want to add any scripts or dependencies that you want to include.

    - add the workspace file location to the package.json in root and make sure to add any scripts that arent already included.

    - From the root folder now run npm install to make sure turborepo recognizes your new workspace. 

    - If the new workspace has any scripts you can now run them from root using "turbo <Script Name>" or "turbo run <Script Name>"