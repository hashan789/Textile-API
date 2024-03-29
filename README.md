# textile-api
Restful api

Textile-api is A RESTful API known as application programming interface (API) which is used to store and get the details of different clothes items in a textile shop.

This api is developed by express js and it is connected to a mongodb database.

RESTful APIs are commonly used to expose data and functionality from web applications to other applications. They are also used to connect different web applications together.

Here is the hierarchical hierarchy of resources:

```
/clothes
/clothes/:id
/clothes/:no_of_items
/clothes/:date
```

In this case, resources are organized into a tree-like structure. The `/clothes` resource represents all clothes, and the `id` , `no_of_items`and `date`  are the attributes of  `clothes` resource .

Here is the RESTful API call to get the full details of all clothes items from this api:

```
GET http://localhost:3000/clothes
```

This call will return the current user's data in JSON format. The HTTP status code 200 will be returned if the request is successful. The HTTP status code 401 will be returned if the user is not authenticated.

RESTful APIs are a popular choice for development because they are easy to understand and use. They are also scalable and reliable.

Here are some of the benefits of using RESTful APIs:

* They are easy to understand and use.
* They are scalable and reliable.
* They are widely supported by most programming languages and frameworks.
* They are well-documented and there are many resources available to help developers learn how to use them.

If you are looking for a way to expose data and functionality from your web application to other applications, RESTful APIs are a good choice. They are easy to understand and use, scalable and reliable, and widely supported.
