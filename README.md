# SubQuery - Starter Package

The Starter Package is an example that you can use as a starting point for developing your SubQuery project.
A SubQuery package defines which data The SubQuery will index from the Substrate blockchain, and how it will store it.

## Preparation

### Environment

- [Typescript](https://www.typescriptlang.org/) are required to compile project and define types.  
- Both SubQuery CLI and generated Project have dependencies and require [Node](https://nodejs.org/en/).

### Install the SubQuery CLI

Install SubQuery CLI globally on your terminal by using NPM:

```bash
npm install -g @subql/cli
```

Run help to see available commands and usage provide by CLI

```bash
subql help
```

## Initialize the starter package

Inside the directory in which you want to create the SubQuery project, simply replace `project-name` with your project name and run the command:

```bash
subql init --starter project-name
```

Then you should see a folder with your project name has been created inside the directory, you can use this as the start point of your project. And the files should be identical as in the [Directory Structure](https://doc.subquery.network/directory_structure.html).

Last, under the project directory, run following command to install all the dependency.

```bash
yarn install
```

## Configure your project

In the starter package, we have provided a simple example of project configuration. You will be mainly working on the following files:

- The Manifest in `project.yaml`
- The GraphQL Schema in `schema.graphql`
- The Mapping functions in `src/mappings/` directory

For more information on how to write the SubQuery, check out our doc section on [Define the SubQuery](https://doc.subquery.network/define_a_subquery.html)

### Code generation

In order to index your SubQuery project, it is mandatory to build your project first.
Run this command under the project directory.

````bash
yarn codegen
````

## Build the project

In order to deploy your SubQuery project to our hosted service, it is mandatory to pack your configuration before upload.
Run pack command from root directory of your project will automatically generate a `your-project-name.tgz` file.

```bash
yarn build
```

## Indexing and Query

### Run required systems in docker

Under the project directory run following command:

```bash
docker-compose pull && docker-compose up
```

### Run on local machine

Config postgres and direnv locally first.

#### Run subql-node

```bash
subql-node -f ./ --db-schema=subql-indexer--batch-size=200 --log-level=debug
```

#### Run subl-query

```bash
subql-query --name=subql-indexer --playground --indexer=http://localhost:3000
```

### Query the project

Open your browser and head to `http://localhost:3000`.

Finally, you should see a GraphQL playground is showing in the explorer and the schemas that ready to query.

For the `subql-indexer` project, you can try to query with the following code to get a taste of how it works.

````graphql
{
  query{
    starterEntities(first:10){
      nodes{
        field1,
        field2,
        field3
      }
    }
  }
}
````
