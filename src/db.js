const users = [
    {
        id: "1",
        name: "Mani",
        email: "mani@example.com",
        age: 27
    },
    {
        id: "2",
        name: "Nagasai",
        email: "nagasai@example.com"
    },
    {
        id: "3",
        name: "Ravi Teja k",
        email: "ravi@example.com"
    }
];
const posts = [
    {
        id: "10",
        title: "GraphQL 101",
        body: "This is how to use GraphQL with Node.js...",
        published: true,
        author: "1"
    },
    {
        id: "11",
        title: "GraphQL 201",
        body: "This is how to use GraphQL with React...",
        published: false,
        author: "1"
    },
    {
        id: "12",
        title: "GraphQL 301",
        body: "This is how to use GraphQL with Angular...",
        published: true,
        author: "2"
    }
];

const comments = [
    {
        id: "102",
        text: "This worked well for me. Thanks!",
        author: "1",
        post: "10"
    },
    {
        id: "104",
        text: "This did no work.",
        author: "2",
        post: "12"
    }
];
const db = {
    users,
    posts,
    comments
};

export { db as default };
