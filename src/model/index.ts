// import Author from './author'
// import Book from './book'
import User from './userModel'

const mongodb = {
    // getBooks: async (condition = null) =>
    //     condition != null ? await Book.find(condition) : await Book.find(),
    // getBookById: async (id: any) => await Book.findById(id),
    // getAuthors: async () => await Author.find(),
    // getAuthorById: async (id: any) => await Author.findById(id),
    // createAuthor: async (args: any) => await new Author(args).save(),
    // createBook: async (args: any) => await new Book(args).save(),
    createUser: async (args: any) => await new User(args).save(),
}

export default mongodb
