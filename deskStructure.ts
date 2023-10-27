// ./deskStructure.js

export const myStructure = (S) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings'),
        ),
      ...S.documentTypeListItems().filter(
        (listItem) => !['siteSettings', 'homePage'].includes(listItem.getId()),
      ),
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            // Sets a title for our new list
            .title('Pages')
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title('Home')
                .child(S.document().schemaType('homePage').documentId('homePage')),
            ])
        ),
    ])
