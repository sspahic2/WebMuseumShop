export class Article {
    constructor(public primaryImage: string, public primaryImageSmall: string,
                public department: string, public title: string,
                public artistDisplayName: string, public artistDisplayBio: string,
                public artistWikidata_URL: string, public dimensions: string,
                public accessionYear: string) { }
}