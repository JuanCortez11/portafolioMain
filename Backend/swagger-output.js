export default {
    swagger: "2.0",
    info: {
        title: "API Documentation",
        description: "Autodocumentación de los endpoints de la API",
        version: "1.0.0"
    },
    host: "localhost:3001",
    basePath: "/",
    schemes: [
        "http"
    ],
    paths: {
        "/status/": {
            get: {
                description: "",
                responses: {
                    200: {
                        description: "OK"
                    }
                }
            }
        },
        "/status/echo/{cadena}": {
            get: {
                description: "",
                parameters: [
                    {
                        name: "cadena",
                        in: "path",
                        required: true,
                        type: "string"
                    }
                ],
                responses: {
                    200: {
                        description: "OK"
                    }
                }
            }
        },
        "/estaciones/": {
            get: {
                description: "",
                responses: {
                    200: {
                        description: "OK"
                    }
                }
            },
            post: {
                description: "",
                responses: {
                    201: {
                        description: "Created"
                    }
                }
            }
        },
        "/estaciones/{id}": {
            get: {
                description: "",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        type: "string"
                    }
                ],
                responses: {
                    200: {
                        description: "OK"
                    },
                    404: {
                        description: "Not Found"
                    }
                }
            },
            put: {
                description: "",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        type: "string"
                    }
                ],
                responses: {
                    204: {
                        description: "No Content"
                    }
                }
            },
            delete: {
                description: "",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        type: "string"
                    }
                ],
                responses: {
                    204: {
                        description: "No Content"
                    }
                }
            }
        },
        "/barrios/": {
            get: {
                description: "",
                responses: {
                    200: {
                        description: "OK"
                    },
                    500: {
                        description: "Internal Server Error"
                    }
                }
            },
            post: {
                description: "",
                responses: {
                    201: {
                        description: "Created"
                    }
                }
            }
        },
        "/barrios/{id}": {
            get: {
                description: "",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        type: "string"
                    }
                ],
                responses: {
                    200: {
                        description: "OK"
                    },
                    404: {
                        description: "Not Found"
                    }
                }
            },
            put: {
                description: "",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        type: "string"
                    }
                ],
                responses: {
                    204: {
                        description: "No Content"
                    }
                }
            },
            delete: {
                description: "",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        type: "string"
                    }
                ],
                responses: {
                    204: {
                        description: "No Content"
                    }
                }
            }
        },
        "/usuarios/": {
            get: {
                description: "",
                parameters: [
                    {
                        name: "texto",
                        in: "query",
                        type: "string"
                    }
                ],
                responses: {
                    200: {
                        description: "OK"
                    },
                    404: {
                        description: "Not Found"
                    }
                }
            }
        },
        "/usuarios/register": {
            post: {
                description: "",
                responses: {
                    201: {
                        description: "Created"
                    }
                }
            }
        },
        "/usuarios/login": {
            post: {
                description: "",
                parameters: [
                    {
                        name: "body",
                        in: "body",
                        schema: {
                            type: "object",
                            properties: {
                                email: {
                                    example: "any"
                                },
                                password: {
                                    example: "any"
                                }
                            }
                        }
                    }
                ],
                responses: {
                    200: {
                        description: "OK"
                    },
                    401: {
                        description: "Unauthorized"
                    }
                }
            }
        },
        "/usuarios/{id}": {
            get: {
                description: "",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        type: "string"
                    }
                ],
                responses: {
                    200: {
                        description: "OK"
                    }
                }
            },
            delete: {
                description: "",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        type: "string"
                    }
                ],
                responses: {
                    204: {
                        description: "No Content"
                    }
                }
            }
        },
        "/usuarios/me": {
            put: {
                description: "",
                parameters: [
                    {
                        name: "body",
                        in: "body",
                        schema: {
                            type: "object",
                            properties: {
                                nombre: {
                                    example: "any"
                                },
                                apellido: {
                                    example: "any"
                                },
                                mail: {
                                    example: "any"
                                }
                            }
                        }
                    }
                ],
                responses: {
                    204: {
                        description: "No Content"
                    }
                }
            }
        },
        "/": {
            get: {
                description: "",
                parameters: [
                    {
                        name: "texto",
                        in: "query",
                        type: "string"
                    }
                ],
                responses: {
                    200: {
                        description: "OK"
                    },
                    404: {
                        description: "Not Found"
                    },
                    500: {
                        description: "Internal Server Error"
                    }
                }
            },
            post: {
                description: "",
                responses: {
                    201: {
                        description: "Created"
                    }
                }
            }
        },
        "/{id}": {
            get: {
                description: "",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        type: "string"
                    }
                ],
                responses: {
                    200: {
                        description: "OK"
                    },
                    404: {
                        description: "Not Found"
                    }
                }
            },
            put: {
                description: "",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        type: "string"
                    }
                ],
                responses: {
                    204: {
                        description: "No Content"
                    }
                }
            },
            delete: {
                description: "",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        type: "string"
                    }
                ],
                responses: {
                    204: {
                        description: "No Content"
                    }
                }
            }
        },
        "/echo/{cadena}": {
            get: {
                description: "",
                parameters: [
                    {
                        name: "cadena",
                        in: "path",
                        required: true,
                        type: "string"
                    }
                ],
                responses: {
                    200: {
                        description: "OK"
                    }
                }
            }
        },
        "/register": {
            post: {
                description: "",
                responses: {
                    201: {
                        description: "Created"
                    }
                }
            }
        },
        "/login": {
            post: {
                description: "",
                parameters: [
                    {
                        name: "body",
                        in: "body",
                        schema: {
                            type: "object",
                            properties: {
                                email: {
                                    example: "any"
                                },
                                password: {
                                    example: "any"
                                }
                            }
                        }
                    }
                ],
                responses: {
                    200: {
                        description: "OK"
                    },
                    401: {
                        description: "Unauthorized"
                    }
                }
            }
        },
        "/me": {
            put: {
                description: "",
                parameters: [
                    {
                        name: "body",
                        in: "body",
                        schema: {
                            type: "object",
                            properties: {
                                nombre: {
                                    example: "any"
                                },
                                apellido: {
                                    example: "any"
                                },
                                mail: {
                                    example: "any"
                                }
                            }
                        }
                    }
                ],
                responses: {
                    204: {
                        description: "No Content"
                    }
                }
            }
        }
    }
};
