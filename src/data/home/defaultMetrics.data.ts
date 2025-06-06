import { COUNTRIES } from "data/customers/countries.data";

export const DEFAULT_METRICS_RESPONSE = {
    "IsSuccess": true,
    "Metrics": {
        "orders": {
            "totalRevenue": 2125681,
            "totalOrders": 21,
            "averageOrderValue": 101223,
            "totalCanceledOrders": 3,
            "recentOrders": [
                {
                    "_id": "683b02ef8877f62c4cab6dd4",
                    "status": "Canceled",
                    "customer": {
                        "_id": "683464b774f4c4971b90396d",
                        "email": "test@gmail.com",
                        "name": "Test siHEyDbWnhZpyOVCeudEdTVFKjQLIAAjJnU",
                        "country": "Canada",
                        "city": "City OYAWUqyweLrWCIp",
                        "street": "Street C1BVyeK2J10s6KnQdsF70FUgtxbhw4Nsz",
                        "house": 324,
                        "flat": 1128,
                        "phone": "+4779061942",
                        "createdOn": "2025-05-26T12:55:19.000Z",
                        "notes": "Notes NSisGQwMcbhTcPEkWNUquZrQcucVwOfAQrEFPOzrtrDVnhmaeyiZJpQvLsLdmXWAhPQuwEowSTpAhYVEjNLGARcfGqgJRwvxdQwZjRFsAmasGVMThggpEImoEQabzXHcbFXlpslysYhSllVWsDGTLbHTbCNklBBafWoEmvHVeNvVBJEmTOhzIsjSvMgsCgidmwjfWEGdqZROsYatNhxQxALeVGOuFKtUYYdovThmraqsoiGMsKDX"
                    },
                    "products": [
                        {
                            "_id": "6833842574f4c4971b90169c",
                            "name": "Anatolyzvnxcv mc",
                            "amount": 85,
                            "price": 55412,
                            "manufacturer": "Samsung",
                            "notes": "Жопа",
                            "received": false
                        },
                        {
                            "_id": "6833842574f4c4971b90169c",
                            "name": "Anatolyzvnxcv mc",
                            "amount": 85,
                            "price": 55412,
                            "manufacturer": "Samsung",
                            "notes": "Жопа",
                            "received": false
                        },
                        {
                            "_id": "6833842574f4c4971b90169c",
                            "name": "Anatolyzvnxcv mc",
                            "amount": 85,
                            "price": 55412,
                            "manufacturer": "Samsung",
                            "notes": "Жопа",
                            "received": false
                        },
                        {
                            "_id": "6833842574f4c4971b90169c",
                            "name": "Anatolyzvnxcv mc",
                            "amount": 85,
                            "price": 55412,
                            "manufacturer": "Samsung",
                            "notes": "Жопа",
                            "received": false
                        },
                        {
                            "_id": "6833842574f4c4971b90169c",
                            "name": "Anatolyzvnxcv mc",
                            "amount": 85,
                            "price": 55412,
                            "manufacturer": "Samsung",
                            "notes": "Жопа",
                            "received": false
                        }
                    ],
                    "delivery": null,
                    "total_price": 277060,
                    "createdOn": "2025-05-31T13:23:59.000Z",
                    "comments": [
                        {
                            "text": "asda",
                            "createdOn": "2025-06-01T21:23:14.000Z",
                            "_id": "683cc4c21c508c5d5e502be7"
                        },
                        {
                            "text": "ывф",
                            "createdOn": "2025-06-01T22:19:20.947Z",
                            "_id": "683cd1e9fd7d4d3057962bc6"
                        }
                    ],
                    "history": [
                        {
                            "status": "Canceled",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-06-03T23:12:43.000Z",
                            "action": "Order canceled",
                            "performer": {
                                "_id": "67c4fd63735ace5b03527f81",
                                "username": "test@gmail.com",
                                "firstName": "Anatoly",
                                "lastName": "Karpovich",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/03/03 01:52:51"
                            },
                            "assignedManager": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-06-01T19:01:52.000Z",
                            "action": "Order reopened",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            }
                        },
                        {
                            "status": "Canceled",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-06-01T19:01:48.000Z",
                            "action": "Order canceled",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-06-01T19:01:41.000Z",
                            "action": "Order reopened",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            }
                        },
                        {
                            "status": "Canceled",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-06-01T19:01:37.000Z",
                            "action": "Order canceled",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-06-01T01:58:12.000Z",
                            "action": "Manager Assigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-06-01T01:57:58.000Z",
                            "action": "Manager Unassigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": null
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-06-01T01:47:12.000Z",
                            "action": "Manager Assigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-06-01T01:44:53.000Z",
                            "action": "Manager Unassigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": null
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-06-01T01:44:33.000Z",
                            "action": "Manager Assigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-06-01T01:39:20.000Z",
                            "action": "Manager Unassigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": null
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-06-01T01:37:11.000Z",
                            "action": "Manager Assigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-06-01T01:04:39.000Z",
                            "action": "Manager Unassigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": null
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-06-01T01:03:13.000Z",
                            "action": "Manager Assigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-06-01T01:03:02.000Z",
                            "action": "Manager Unassigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": null
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-06-01T00:55:03.000Z",
                            "action": "Manager Assigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-06-01T00:53:27.000Z",
                            "action": "Manager Unassigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": null
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-06-01T00:50:30.000Z",
                            "action": "Manager Assigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-06-01T00:47:14.000Z",
                            "action": "Manager Unassigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": null
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-06-01T00:43:22.000Z",
                            "action": "Manager Assigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-06-01T00:27:34.000Z",
                            "action": "Manager Unassigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": null
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-06-01T00:18:51.000Z",
                            "action": "Manager Assigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-06-01T00:16:10.000Z",
                            "action": "Manager Unassigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": null
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-05-31T23:05:00.000Z",
                            "action": "Manager Assigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-05-31T23:01:17.000Z",
                            "action": "Manager Unassigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": null
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-05-31T22:56:27.000Z",
                            "action": "Manager Assigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-05-31T22:54:53.000Z",
                            "action": "Manager Unassigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": null
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-05-31T22:47:15.000Z",
                            "action": "Manager Assigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "67c4fd63735ace5b03527f81",
                                "username": "test@gmail.com",
                                "firstName": "Anatoly",
                                "lastName": "Karpovich",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/03/03 01:52:51"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-05-31T22:47:11.000Z",
                            "action": "Manager Unassigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": null
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-05-31T22:47:07.000Z",
                            "action": "Manager Assigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "67c4fd63735ace5b03527f81",
                                "username": "test@gmail.com",
                                "firstName": "Anatoly",
                                "lastName": "Karpovich",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/03/03 01:52:51"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-05-31T21:34:30.000Z",
                            "action": "Manager Assigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "68196484d006ba3d4760a076",
                                "username": "Kamposter",
                                "firstName": "Barys",
                                "lastName": "Kotau",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/05/06 01:23:16"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-05-31T21:34:25.000Z",
                            "action": "Manager Unassigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": null
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-05-31T21:34:14.000Z",
                            "action": "Manager Assigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "68196484d006ba3d4760a076",
                                "username": "Kamposter",
                                "firstName": "Barys",
                                "lastName": "Kotau",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/05/06 01:23:16"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-05-31T21:33:38.000Z",
                            "action": "Manager Unassigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": null
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-05-31T21:33:35.000Z",
                            "action": "Manager Assigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "67c4fd63735ace5b03527f81",
                                "username": "test@gmail.com",
                                "firstName": "Anatoly",
                                "lastName": "Karpovich",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/03/03 01:52:51"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-05-31T20:57:02.000Z",
                            "action": "Manager Unassigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": null
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-05-31T20:56:56.000Z",
                            "action": "Manager Assigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "67c4fd63735ace5b03527f81",
                                "username": "test@gmail.com",
                                "firstName": "Anatoly",
                                "lastName": "Karpovich",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/03/03 01:52:51"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-05-31T20:55:08.000Z",
                            "action": "Manager Unassigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": null
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-05-31T20:55:05.000Z",
                            "action": "Manager Assigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "68196484d006ba3d4760a076",
                                "username": "Kamposter",
                                "firstName": "Barys",
                                "lastName": "Kotau",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/05/06 01:23:16"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-05-31T19:17:03.000Z",
                            "action": "Manager Unassigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": null
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-05-31T19:16:05.000Z",
                            "action": "Manager Assigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "67c4fd63735ace5b03527f81",
                                "username": "test@gmail.com",
                                "firstName": "Anatoly",
                                "lastName": "Karpovich",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/03/03 01:52:51"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-05-31T19:15:54.000Z",
                            "action": "Manager Unassigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": null
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-05-31T19:14:44.000Z",
                            "action": "Manager Assigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "67c4fd63735ace5b03527f81",
                                "username": "test@gmail.com",
                                "firstName": "Anatoly",
                                "lastName": "Karpovich",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/03/03 01:52:51"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-05-31T13:23:59.000Z",
                            "action": "Order created",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": null
                        }
                    ],
                    "assignedManager": {
                        "_id": "67c4c707c41258c86507d85d",
                        "username": "aqacourse@gmail.com",
                        "firstName": "Admin",
                        "lastName": "Admin",
                        "roles": [
                            "ADMIN"
                        ],
                        "createdOn": "2025/03/02 22:00:55"
                    }
                },
                {
                    "_id": "6834e1fb91d9726227d7b9da",
                    "status": "Received",
                    "customer": {
                        "_id": "6831a905d006ba3d4762237f",
                        "email": "1748084993014Aleksey.Naumov99@yahoo.com",
                        "name": "Aleks VMgWyXdEmAi",
                        "country": "Canada",
                        "city": "Test town Colorado",
                        "street": "492 Kings Highway",
                        "house": 2,
                        "flat": 3,
                        "phone": "+17035425281",
                        "createdOn": "2025-05-24T11:09:57.000Z",
                        "notes": "Test Vinitor fuga stultus nihil venio appello curatio."
                    },
                    "products": [
                        {
                            "_id": "6831d556d006ba3d47623929",
                            "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                            "amount": 341,
                            "price": 40785,
                            "manufacturer": "Samsung",
                            "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                            "received": true
                        },
                        {
                            "_id": "683f4e001c508c5d5e50b3d8",
                            "name": "a1b2c3",
                            "amount": 500,
                            "price": 150,
                            "manufacturer": "Tesla",
                            "notes": "Test Notes from Table",
                            "received": true
                        },
                        {
                            "_id": "68321efdd006ba3d476240d0",
                            "name": "aaa",
                            "amount": 11,
                            "price": 111,
                            "manufacturer": "Apple",
                            "notes": "d",
                            "received": true
                        },
                        {
                            "_id": "6831d556d006ba3d47623929",
                            "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                            "amount": 341,
                            "price": 40785,
                            "manufacturer": "Samsung",
                            "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                            "received": true
                        }
                    ],
                    "delivery": {
                        "address": {
                            "country": "Canada",
                            "city": "Test town Colorado",
                            "street": "492 Kings Highway",
                            "house": 2,
                            "flat": 3
                        },
                        "finalDate": "2025-06-13T00:00:00.000Z",
                        "condition": "Delivery"
                    },
                    "total_price": 81831,
                    "createdOn": "2025-05-26T21:49:47.000Z",
                    "comments": [],
                    "history": [
                        {
                            "status": "Received",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": true
                                },
                                {
                                    "_id": "683f4e001c508c5d5e50b3d8",
                                    "name": "a1b2c3",
                                    "amount": 500,
                                    "price": 150,
                                    "manufacturer": "Tesla",
                                    "notes": "Test Notes from Table",
                                    "received": true
                                },
                                {
                                    "_id": "68321efdd006ba3d476240d0",
                                    "name": "aaa",
                                    "amount": 11,
                                    "price": 111,
                                    "manufacturer": "Apple",
                                    "notes": "d",
                                    "received": true
                                },
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": true
                                }
                            ],
                            "total_price": 81831,
                            "delivery": {
                                "address": {
                                    "country": "Canada",
                                    "city": "Test town Colorado",
                                    "street": "492 Kings Highway",
                                    "house": 2,
                                    "flat": 3
                                },
                                "finalDate": "2025-06-13T00:00:00.000Z",
                                "condition": "Delivery"
                            },
                            "changedOn": "2025-06-03T20:00:18.000Z",
                            "action": "All products received",
                            "performer": {
                                "_id": "67c4fd63735ace5b03527f81",
                                "username": "test@gmail.com",
                                "firstName": "Anatoly",
                                "lastName": "Karpovich",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/03/03 01:52:51"
                            },
                            "assignedManager": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            }
                        },
                        {
                            "status": "Partially Received",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": true
                                },
                                {
                                    "_id": "683f4e001c508c5d5e50b3d8",
                                    "name": "a1b2c3",
                                    "amount": 500,
                                    "price": 150,
                                    "manufacturer": "Tesla",
                                    "notes": "Test Notes from Table",
                                    "received": false
                                },
                                {
                                    "_id": "68321efdd006ba3d476240d0",
                                    "name": "aaa",
                                    "amount": 11,
                                    "price": 111,
                                    "manufacturer": "Apple",
                                    "notes": "d",
                                    "received": false
                                },
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": false
                                }
                            ],
                            "total_price": 81831,
                            "delivery": {
                                "address": {
                                    "country": "Canada",
                                    "city": "Test town Colorado",
                                    "street": "492 Kings Highway",
                                    "house": 2,
                                    "flat": 3
                                },
                                "finalDate": "2025-06-13T00:00:00.000Z",
                                "condition": "Delivery"
                            },
                            "changedOn": "2025-06-03T20:00:10.000Z",
                            "action": "Received",
                            "performer": {
                                "_id": "67c4fd63735ace5b03527f81",
                                "username": "test@gmail.com",
                                "firstName": "Anatoly",
                                "lastName": "Karpovich",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/03/03 01:52:51"
                            },
                            "assignedManager": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            }
                        },
                        {
                            "status": "In Process",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": false
                                },
                                {
                                    "_id": "683f4e001c508c5d5e50b3d8",
                                    "name": "a1b2c3",
                                    "amount": 500,
                                    "price": 150,
                                    "manufacturer": "Tesla",
                                    "notes": "Test Notes from Table",
                                    "received": false
                                },
                                {
                                    "_id": "68321efdd006ba3d476240d0",
                                    "name": "aaa",
                                    "amount": 11,
                                    "price": 111,
                                    "manufacturer": "Apple",
                                    "notes": "d",
                                    "received": false
                                },
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": false
                                }
                            ],
                            "total_price": 81831,
                            "delivery": {
                                "address": {
                                    "country": "Canada",
                                    "city": "Test town Colorado",
                                    "street": "492 Kings Highway",
                                    "house": 2,
                                    "flat": 3
                                },
                                "finalDate": "2025-06-13T00:00:00.000Z",
                                "condition": "Delivery"
                            },
                            "changedOn": "2025-06-03T20:00:05.000Z",
                            "action": "Order processing started",
                            "performer": {
                                "_id": "67c4fd63735ace5b03527f81",
                                "username": "test@gmail.com",
                                "firstName": "Anatoly",
                                "lastName": "Karpovich",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/03/03 01:52:51"
                            },
                            "assignedManager": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": false
                                },
                                {
                                    "_id": "683f4e001c508c5d5e50b3d8",
                                    "name": "a1b2c3",
                                    "amount": 500,
                                    "price": 150,
                                    "manufacturer": "Tesla",
                                    "notes": "Test Notes from Table",
                                    "received": false
                                },
                                {
                                    "_id": "68321efdd006ba3d476240d0",
                                    "name": "aaa",
                                    "amount": 11,
                                    "price": 111,
                                    "manufacturer": "Apple",
                                    "notes": "d",
                                    "received": false
                                },
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": false
                                }
                            ],
                            "total_price": 81831,
                            "delivery": {
                                "address": {
                                    "country": "Canada",
                                    "city": "Test town Colorado",
                                    "street": "492 Kings Highway",
                                    "house": 2,
                                    "flat": 3
                                },
                                "finalDate": "2025-06-13T00:00:00.000Z",
                                "condition": "Delivery"
                            },
                            "changedOn": "2025-06-03T20:00:03.000Z",
                            "action": "Delivery Scheduled",
                            "performer": {
                                "_id": "67c4fd63735ace5b03527f81",
                                "username": "test@gmail.com",
                                "firstName": "Anatoly",
                                "lastName": "Karpovich",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/03/03 01:52:51"
                            },
                            "assignedManager": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": false
                                },
                                {
                                    "_id": "683f4e001c508c5d5e50b3d8",
                                    "name": "a1b2c3",
                                    "amount": 500,
                                    "price": 150,
                                    "manufacturer": "Tesla",
                                    "notes": "Test Notes from Table",
                                    "received": false
                                },
                                {
                                    "_id": "68321efdd006ba3d476240d0",
                                    "name": "aaa",
                                    "amount": 11,
                                    "price": 111,
                                    "manufacturer": "Apple",
                                    "notes": "d",
                                    "received": false
                                },
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": false
                                }
                            ],
                            "total_price": 81831,
                            "delivery": null,
                            "changedOn": "2025-06-03T19:59:58.000Z",
                            "action": "Order reopened",
                            "performer": {
                                "_id": "67c4fd63735ace5b03527f81",
                                "username": "test@gmail.com",
                                "firstName": "Anatoly",
                                "lastName": "Karpovich",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/03/03 01:52:51"
                            },
                            "assignedManager": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            }
                        },
                        {
                            "status": "Canceled",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": false
                                },
                                {
                                    "_id": "683f4e001c508c5d5e50b3d8",
                                    "name": "a1b2c3",
                                    "amount": 500,
                                    "price": 150,
                                    "manufacturer": "Tesla",
                                    "notes": "Test Notes from Table",
                                    "received": false
                                },
                                {
                                    "_id": "68321efdd006ba3d476240d0",
                                    "name": "aaa",
                                    "amount": 11,
                                    "price": 111,
                                    "manufacturer": "Apple",
                                    "notes": "d",
                                    "received": false
                                },
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": false
                                }
                            ],
                            "total_price": 81831,
                            "delivery": {
                                "address": {
                                    "country": "Canada",
                                    "city": "Test town Colorado",
                                    "street": "492 Kings Highway",
                                    "house": 2,
                                    "flat": 3
                                },
                                "finalDate": "2025-06-11T00:00:00.000Z",
                                "condition": "Delivery"
                            },
                            "changedOn": "2025-06-03T19:59:55.000Z",
                            "action": "Order canceled",
                            "performer": {
                                "_id": "67c4fd63735ace5b03527f81",
                                "username": "test@gmail.com",
                                "firstName": "Anatoly",
                                "lastName": "Karpovich",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/03/03 01:52:51"
                            },
                            "assignedManager": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            }
                        },
                        {
                            "status": "In Process",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": false
                                },
                                {
                                    "_id": "683f4e001c508c5d5e50b3d8",
                                    "name": "a1b2c3",
                                    "amount": 500,
                                    "price": 150,
                                    "manufacturer": "Tesla",
                                    "notes": "Test Notes from Table",
                                    "received": false
                                },
                                {
                                    "_id": "68321efdd006ba3d476240d0",
                                    "name": "aaa",
                                    "amount": 11,
                                    "price": 111,
                                    "manufacturer": "Apple",
                                    "notes": "d",
                                    "received": false
                                },
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": false
                                }
                            ],
                            "total_price": 81831,
                            "delivery": {
                                "address": {
                                    "country": "Canada",
                                    "city": "Test town Colorado",
                                    "street": "492 Kings Highway",
                                    "house": 2,
                                    "flat": 3
                                },
                                "finalDate": "2025-06-11T00:00:00.000Z",
                                "condition": "Delivery"
                            },
                            "changedOn": "2025-06-03T19:59:45.000Z",
                            "action": "Order processing started",
                            "performer": {
                                "_id": "67c4fd63735ace5b03527f81",
                                "username": "test@gmail.com",
                                "firstName": "Anatoly",
                                "lastName": "Karpovich",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/03/03 01:52:51"
                            },
                            "assignedManager": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": false
                                },
                                {
                                    "_id": "683f4e001c508c5d5e50b3d8",
                                    "name": "a1b2c3",
                                    "amount": 500,
                                    "price": 150,
                                    "manufacturer": "Tesla",
                                    "notes": "Test Notes from Table",
                                    "received": false
                                },
                                {
                                    "_id": "68321efdd006ba3d476240d0",
                                    "name": "aaa",
                                    "amount": 11,
                                    "price": 111,
                                    "manufacturer": "Apple",
                                    "notes": "d",
                                    "received": false
                                },
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": false
                                }
                            ],
                            "total_price": 81831,
                            "delivery": {
                                "address": {
                                    "country": "Canada",
                                    "city": "Test town Colorado",
                                    "street": "492 Kings Highway",
                                    "house": 2,
                                    "flat": 3
                                },
                                "finalDate": "2025-06-11T00:00:00.000Z",
                                "condition": "Delivery"
                            },
                            "changedOn": "2025-06-03T19:59:36.000Z",
                            "action": "Delivery Edited",
                            "performer": {
                                "_id": "67c4fd63735ace5b03527f81",
                                "username": "test@gmail.com",
                                "firstName": "Anatoly",
                                "lastName": "Karpovich",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/03/03 01:52:51"
                            },
                            "assignedManager": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": false
                                },
                                {
                                    "_id": "683f4e001c508c5d5e50b3d8",
                                    "name": "a1b2c3",
                                    "amount": 500,
                                    "price": 150,
                                    "manufacturer": "Tesla",
                                    "notes": "Test Notes from Table",
                                    "received": false
                                },
                                {
                                    "_id": "68321efdd006ba3d476240d0",
                                    "name": "aaa",
                                    "amount": 11,
                                    "price": 111,
                                    "manufacturer": "Apple",
                                    "notes": "d",
                                    "received": false
                                },
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": false
                                }
                            ],
                            "total_price": 81831,
                            "delivery": {
                                "address": {
                                    "country": "Canada",
                                    "city": "Test town Colorado",
                                    "street": "492 Kings Highway",
                                    "house": 2,
                                    "flat": 3
                                },
                                "finalDate": "2025-06-11T00:00:00.000Z",
                                "condition": "Delivery"
                            },
                            "changedOn": "2025-06-03T19:59:31.000Z",
                            "action": "Delivery Scheduled",
                            "performer": {
                                "_id": "67c4fd63735ace5b03527f81",
                                "username": "test@gmail.com",
                                "firstName": "Anatoly",
                                "lastName": "Karpovich",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/03/03 01:52:51"
                            },
                            "assignedManager": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": false
                                },
                                {
                                    "_id": "683f4e001c508c5d5e50b3d8",
                                    "name": "a1b2c3",
                                    "amount": 500,
                                    "price": 150,
                                    "manufacturer": "Tesla",
                                    "notes": "Test Notes from Table",
                                    "received": false
                                },
                                {
                                    "_id": "68321efdd006ba3d476240d0",
                                    "name": "aaa",
                                    "amount": 11,
                                    "price": 111,
                                    "manufacturer": "Apple",
                                    "notes": "d",
                                    "received": false
                                },
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": false
                                }
                            ],
                            "total_price": 81831,
                            "delivery": null,
                            "changedOn": "2025-06-03T19:59:01.000Z",
                            "action": "Requested products changed",
                            "performer": {
                                "_id": "67c4fd63735ace5b03527f81",
                                "username": "test@gmail.com",
                                "firstName": "Anatoly",
                                "lastName": "Karpovich",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/03/03 01:52:51"
                            },
                            "assignedManager": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": false
                                }
                            ],
                            "total_price": 40785,
                            "delivery": null,
                            "changedOn": "2025-06-02T10:37:41.000Z",
                            "action": "Manager Assigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": false
                                }
                            ],
                            "total_price": 40785,
                            "delivery": null,
                            "changedOn": "2025-06-02T10:37:35.000Z",
                            "action": "Manager Unassigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": null
                        },
                        {
                            "status": "Draft",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": false
                                }
                            ],
                            "total_price": 40785,
                            "delivery": null,
                            "changedOn": "2025-06-02T10:21:53.000Z",
                            "action": "Order reopened",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            }
                        },
                        {
                            "status": "Canceled",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": false
                                }
                            ],
                            "total_price": 40785,
                            "delivery": null,
                            "changedOn": "2025-06-02T10:21:14.000Z",
                            "action": "Order canceled",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": false
                                }
                            ],
                            "total_price": 40785,
                            "delivery": null,
                            "changedOn": "2025-06-01T19:02:19.000Z",
                            "action": "Order reopened",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            }
                        },
                        {
                            "status": "Canceled",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": false
                                }
                            ],
                            "total_price": 40785,
                            "delivery": null,
                            "changedOn": "2025-06-01T19:01:57.000Z",
                            "action": "Order canceled",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": false
                                }
                            ],
                            "total_price": 40785,
                            "delivery": null,
                            "changedOn": "2025-05-31T23:12:29.000Z",
                            "action": "Manager Assigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": false
                                }
                            ],
                            "total_price": 40785,
                            "delivery": null,
                            "changedOn": "2025-05-31T22:54:58.000Z",
                            "action": "Manager Unassigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": null
                        },
                        {
                            "status": "Draft",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": false
                                }
                            ],
                            "total_price": 40785,
                            "delivery": null,
                            "changedOn": "2025-05-31T22:20:19.000Z",
                            "action": "Manager Assigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "67c4fd63735ace5b03527f81",
                                "username": "test@gmail.com",
                                "firstName": "Anatoly",
                                "lastName": "Karpovich",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/03/03 01:52:51"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": false
                                }
                            ],
                            "total_price": 40785,
                            "delivery": null,
                            "changedOn": "2025-05-31T22:20:12.000Z",
                            "action": "Manager Assigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "68196484d006ba3d4760a076",
                                "username": "Kamposter",
                                "firstName": "Barys",
                                "lastName": "Kotau",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/05/06 01:23:16"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": false
                                }
                            ],
                            "total_price": 40785,
                            "delivery": null,
                            "changedOn": "2025-05-31T22:20:03.000Z",
                            "action": "Manager Unassigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": null
                        },
                        {
                            "status": "Draft",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": false
                                }
                            ],
                            "total_price": 40785,
                            "delivery": null,
                            "changedOn": "2025-05-31T22:19:40.000Z",
                            "action": "Manager Assigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "67c4fd63735ace5b03527f81",
                                "username": "test@gmail.com",
                                "firstName": "Anatoly",
                                "lastName": "Karpovich",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/03/03 01:52:51"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": false
                                }
                            ],
                            "total_price": 40785,
                            "delivery": null,
                            "changedOn": "2025-05-31T22:19:36.000Z",
                            "action": "Manager Assigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": false
                                }
                            ],
                            "total_price": 40785,
                            "delivery": null,
                            "changedOn": "2025-05-31T22:19:33.000Z",
                            "action": "Manager Unassigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": null
                        },
                        {
                            "status": "Draft",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": false
                                }
                            ],
                            "total_price": 40785,
                            "delivery": null,
                            "changedOn": "2025-05-31T22:19:30.000Z",
                            "action": "Manager Assigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "67c4fd63735ace5b03527f81",
                                "username": "test@gmail.com",
                                "firstName": "Anatoly",
                                "lastName": "Karpovich",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/03/03 01:52:51"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": false
                                }
                            ],
                            "total_price": 40785,
                            "delivery": null,
                            "changedOn": "2025-05-31T22:16:15.000Z",
                            "action": "Manager Unassigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": null
                        },
                        {
                            "status": "Draft",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": false
                                }
                            ],
                            "total_price": 40785,
                            "delivery": null,
                            "changedOn": "2025-05-31T22:16:13.000Z",
                            "action": "Manager Assigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "67c4fd63735ace5b03527f81",
                                "username": "test@gmail.com",
                                "firstName": "Anatoly",
                                "lastName": "Karpovich",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/03/03 01:52:51"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": false
                                }
                            ],
                            "total_price": 40785,
                            "delivery": null,
                            "changedOn": "2025-05-31T20:06:49.000Z",
                            "action": "Manager Unassigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": null
                        },
                        {
                            "status": "Draft",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": false
                                }
                            ],
                            "total_price": 40785,
                            "delivery": null,
                            "changedOn": "2025-05-31T20:06:41.000Z",
                            "action": "Manager Assigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "67c4fd63735ace5b03527f81",
                                "username": "test@gmail.com",
                                "firstName": "Anatoly",
                                "lastName": "Karpovich",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/03/03 01:52:51"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": false
                                }
                            ],
                            "total_price": 40785,
                            "delivery": null,
                            "changedOn": "2025-05-31T20:01:14.000Z",
                            "action": "Manager Unassigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": null
                        },
                        {
                            "status": "Draft",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "6831d556d006ba3d47623929",
                                    "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    "amount": 341,
                                    "price": 40785,
                                    "manufacturer": "Samsung",
                                    "notes": "s1fLXH1Piy4KOi75BartD0TiNbSWED7vDdFdmI0tJnnEtsQX5yyJjCBK1oWCcBvm8Bom85xAINeDSQErhqJTNag7lPGuLLphtoMIL2X3zH75kwvpVsosJ1FAG0ueC7FFMYz34cgu5gcRkGfabxTzHuv3yI2e7X0crWSsfolONoCFnpe2OA3jbyTWT2HAbuBL8W16CjYuSgVplNSyiTsSGkPkYm83X7MgNEk76OYImKq2PpOAaQz6DOC3G8",
                                    "received": false
                                }
                            ],
                            "total_price": 40785,
                            "delivery": null,
                            "changedOn": "2025-05-31T13:26:17.000Z",
                            "action": "Requested products changed",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": null
                        },
                        {
                            "status": "Draft",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "68321efdd006ba3d476240d0",
                                    "name": "aaa",
                                    "amount": 11,
                                    "price": 111,
                                    "manufacturer": "Apple",
                                    "notes": "d",
                                    "received": false
                                }
                            ],
                            "total_price": 111,
                            "delivery": null,
                            "changedOn": "2025-05-28T14:00:28.000Z",
                            "action": "Customer changed",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": null
                        },
                        {
                            "status": "Draft",
                            "customer": "682f5929d006ba3d4761eeb4",
                            "products": [
                                {
                                    "_id": "68321efdd006ba3d476240d0",
                                    "name": "aaa",
                                    "amount": 11,
                                    "price": 111,
                                    "manufacturer": "Apple",
                                    "notes": "d",
                                    "received": false
                                }
                            ],
                            "total_price": 111,
                            "delivery": null,
                            "changedOn": "2025-05-26T21:49:47.000Z",
                            "action": "Order created",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": null
                        }
                    ],
                    "assignedManager": {
                        "_id": "67c4c707c41258c86507d85d",
                        "username": "aqacourse@gmail.com",
                        "firstName": "Admin",
                        "lastName": "Admin",
                        "roles": [
                            "ADMIN"
                        ],
                        "createdOn": "2025/03/02 22:00:55"
                    }
                },
                {
                    "_id": "6834cdca74f4c4971b9070a6",
                    "status": "Received",
                    "customer": {
                        "_id": "6831a905d006ba3d4762237f",
                        "email": "1748084993014Aleksey.Naumov99@yahoo.com",
                        "name": "Aleks VMgWyXdEmAi",
                        "country": "Canada",
                        "city": "Test town Colorado",
                        "street": "492 Kings Highway",
                        "house": 2,
                        "flat": 3,
                        "phone": "+17035425281",
                        "createdOn": "2025-05-24T11:09:57.000Z",
                        "notes": "Test Vinitor fuga stultus nihil venio appello curatio."
                    },
                    "products": [
                        {
                            "_id": "68336e2a74f4c4971b9009ae",
                            "name": "Test example",
                            "amount": 2,
                            "price": 1111,
                            "manufacturer": "Samsung",
                            "notes": "New",
                            "received": true
                        },
                        {
                            "_id": "68336e2a74f4c4971b9009ae",
                            "name": "Test example",
                            "amount": 2,
                            "price": 1111,
                            "manufacturer": "Samsung",
                            "notes": "New",
                            "received": true
                        },
                        {
                            "_id": "68336e2a74f4c4971b9009ae",
                            "name": "Test example",
                            "amount": 2,
                            "price": 1111,
                            "manufacturer": "Samsung",
                            "notes": "New",
                            "received": true
                        },
                        {
                            "_id": "68336e2a74f4c4971b9009ae",
                            "name": "Test example",
                            "amount": 2,
                            "price": 1111,
                            "manufacturer": "Samsung",
                            "notes": "New",
                            "received": true
                        },
                        {
                            "_id": "68336e2a74f4c4971b9009ae",
                            "name": "Test example",
                            "amount": 2,
                            "price": 1111,
                            "manufacturer": "Samsung",
                            "notes": "New",
                            "received": true
                        }
                    ],
                    "delivery": {
                        "address": {
                            "country": "Canada",
                            "city": "Test town Colorado",
                            "street": "492 Kings Highway",
                            "house": 2,
                            "flat": 3
                        },
                        "finalDate": "2025-06-10T22:00:00.000Z",
                        "condition": "Delivery"
                    },
                    "total_price": 5555,
                    "createdOn": "2025-05-26T20:23:38.000Z",
                    "comments": [
                        {
                            "text": "new comment",
                            "createdOn": "2025-05-26T21:56:27.000Z",
                            "_id": "6834e38b91d9726227d7ba74"
                        },
                        {
                            "text": "new comment",
                            "createdOn": "2025-05-26T21:56:37.000Z",
                            "_id": "6834e39691d9726227d7ba8c"
                        },
                        {
                            "text": "new comment",
                            "createdOn": "2025-05-26T22:03:43.000Z",
                            "_id": "6834e53f91d9726227d7bae3"
                        }
                    ],
                    "history": [
                        {
                            "status": "Received",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": true
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": true
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": true
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": true
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": true
                                }
                            ],
                            "total_price": 5555,
                            "delivery": {
                                "address": {
                                    "country": "Canada",
                                    "city": "Test town Colorado",
                                    "street": "492 Kings Highway",
                                    "house": 2,
                                    "flat": 3
                                },
                                "finalDate": "2025-06-10T22:00:00.000Z",
                                "condition": "Delivery"
                            },
                            "changedOn": "2025-06-03T19:58:12.000Z",
                            "action": "Manager Assigned",
                            "performer": {
                                "_id": "67c4fd63735ace5b03527f81",
                                "username": "test@gmail.com",
                                "firstName": "Anatoly",
                                "lastName": "Karpovich",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/03/03 01:52:51"
                            },
                            "assignedManager": {
                                "_id": "680d4d7dd006ba3d475ff67b",
                                "username": "OlgaMarushkina",
                                "firstName": "Olga",
                                "lastName": "Marushkina",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/04/26 21:17:49"
                            }
                        },
                        {
                            "status": "Received",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": true
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": true
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": true
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": true
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": true
                                }
                            ],
                            "total_price": 5555,
                            "delivery": {
                                "address": {
                                    "country": "Canada",
                                    "city": "Test town Colorado",
                                    "street": "492 Kings Highway",
                                    "house": 2,
                                    "flat": 3
                                },
                                "finalDate": "2025-06-10T22:00:00.000Z",
                                "condition": "Delivery"
                            },
                            "changedOn": "2025-06-01T18:45:32.000Z",
                            "action": "All products received",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "68196484d006ba3d4760a076",
                                "username": "Kamposter",
                                "firstName": "Barys",
                                "lastName": "Kotau",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/05/06 01:23:16"
                            }
                        },
                        {
                            "status": "Partially Received",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": true
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": true
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                }
                            ],
                            "total_price": 5555,
                            "delivery": {
                                "address": {
                                    "country": "Canada",
                                    "city": "Test town Colorado",
                                    "street": "492 Kings Highway",
                                    "house": 2,
                                    "flat": 3
                                },
                                "finalDate": "2025-06-10T22:00:00.000Z",
                                "condition": "Delivery"
                            },
                            "changedOn": "2025-06-01T18:44:52.000Z",
                            "action": "Received",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "68196484d006ba3d4760a076",
                                "username": "Kamposter",
                                "firstName": "Barys",
                                "lastName": "Kotau",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/05/06 01:23:16"
                            }
                        },
                        {
                            "status": "Partially Received",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": true
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                }
                            ],
                            "total_price": 5555,
                            "delivery": {
                                "address": {
                                    "country": "Canada",
                                    "city": "Test town Colorado",
                                    "street": "492 Kings Highway",
                                    "house": 2,
                                    "flat": 3
                                },
                                "finalDate": "2025-06-10T22:00:00.000Z",
                                "condition": "Delivery"
                            },
                            "changedOn": "2025-06-01T18:43:30.000Z",
                            "action": "Received",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "68196484d006ba3d4760a076",
                                "username": "Kamposter",
                                "firstName": "Barys",
                                "lastName": "Kotau",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/05/06 01:23:16"
                            }
                        },
                        {
                            "status": "In Process",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                }
                            ],
                            "total_price": 5555,
                            "delivery": {
                                "address": {
                                    "country": "Canada",
                                    "city": "Test town Colorado",
                                    "street": "492 Kings Highway",
                                    "house": 2,
                                    "flat": 3
                                },
                                "finalDate": "2025-06-10T22:00:00.000Z",
                                "condition": "Delivery"
                            },
                            "changedOn": "2025-06-01T18:43:06.000Z",
                            "action": "Order processing started",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "68196484d006ba3d4760a076",
                                "username": "Kamposter",
                                "firstName": "Barys",
                                "lastName": "Kotau",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/05/06 01:23:16"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                }
                            ],
                            "total_price": 5555,
                            "delivery": {
                                "address": {
                                    "country": "Canada",
                                    "city": "Test town Colorado",
                                    "street": "492 Kings Highway",
                                    "house": 2,
                                    "flat": 3
                                },
                                "finalDate": "2025-06-10T22:00:00.000Z",
                                "condition": "Delivery"
                            },
                            "changedOn": "2025-06-01T18:42:56.000Z",
                            "action": "Delivery Scheduled",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "68196484d006ba3d4760a076",
                                "username": "Kamposter",
                                "firstName": "Barys",
                                "lastName": "Kotau",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/05/06 01:23:16"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                }
                            ],
                            "total_price": 5555,
                            "delivery": null,
                            "changedOn": "2025-06-01T18:38:56.000Z",
                            "action": "Order reopened",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "68196484d006ba3d4760a076",
                                "username": "Kamposter",
                                "firstName": "Barys",
                                "lastName": "Kotau",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/05/06 01:23:16"
                            }
                        },
                        {
                            "status": "Canceled",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                }
                            ],
                            "total_price": 5555,
                            "delivery": null,
                            "changedOn": "2025-06-01T18:34:43.000Z",
                            "action": "Order canceled",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "68196484d006ba3d4760a076",
                                "username": "Kamposter",
                                "firstName": "Barys",
                                "lastName": "Kotau",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/05/06 01:23:16"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                }
                            ],
                            "total_price": 5555,
                            "delivery": null,
                            "changedOn": "2025-06-01T18:33:50.000Z",
                            "action": "Order reopened",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "68196484d006ba3d4760a076",
                                "username": "Kamposter",
                                "firstName": "Barys",
                                "lastName": "Kotau",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/05/06 01:23:16"
                            }
                        },
                        {
                            "status": "Canceled",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                }
                            ],
                            "total_price": 5555,
                            "delivery": null,
                            "changedOn": "2025-06-01T18:31:49.000Z",
                            "action": "Order canceled",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "68196484d006ba3d4760a076",
                                "username": "Kamposter",
                                "firstName": "Barys",
                                "lastName": "Kotau",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/05/06 01:23:16"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                }
                            ],
                            "total_price": 5555,
                            "delivery": null,
                            "changedOn": "2025-06-01T18:18:34.000Z",
                            "action": "Order reopened",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "68196484d006ba3d4760a076",
                                "username": "Kamposter",
                                "firstName": "Barys",
                                "lastName": "Kotau",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/05/06 01:23:16"
                            }
                        },
                        {
                            "status": "Canceled",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                }
                            ],
                            "total_price": 5555,
                            "delivery": null,
                            "changedOn": "2025-06-01T18:18:30.000Z",
                            "action": "Order canceled",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "68196484d006ba3d4760a076",
                                "username": "Kamposter",
                                "firstName": "Barys",
                                "lastName": "Kotau",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/05/06 01:23:16"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                }
                            ],
                            "total_price": 5555,
                            "delivery": null,
                            "changedOn": "2025-06-01T18:17:39.000Z",
                            "action": "Order reopened",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "68196484d006ba3d4760a076",
                                "username": "Kamposter",
                                "firstName": "Barys",
                                "lastName": "Kotau",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/05/06 01:23:16"
                            }
                        },
                        {
                            "status": "Canceled",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                }
                            ],
                            "total_price": 5555,
                            "delivery": null,
                            "changedOn": "2025-06-01T18:16:54.000Z",
                            "action": "Order canceled",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "68196484d006ba3d4760a076",
                                "username": "Kamposter",
                                "firstName": "Barys",
                                "lastName": "Kotau",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/05/06 01:23:16"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                }
                            ],
                            "total_price": 5555,
                            "delivery": null,
                            "changedOn": "2025-06-01T18:15:33.000Z",
                            "action": "Order reopened",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "68196484d006ba3d4760a076",
                                "username": "Kamposter",
                                "firstName": "Barys",
                                "lastName": "Kotau",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/05/06 01:23:16"
                            }
                        },
                        {
                            "status": "Canceled",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                }
                            ],
                            "total_price": 5555,
                            "delivery": {
                                "address": {
                                    "country": "Canada",
                                    "city": "Test town Colorado",
                                    "street": "492 Kings Highway",
                                    "house": 2,
                                    "flat": 3
                                },
                                "finalDate": "2025-06-10T22:00:00.000Z",
                                "condition": "Delivery"
                            },
                            "changedOn": "2025-06-01T18:15:25.000Z",
                            "action": "Order canceled",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "68196484d006ba3d4760a076",
                                "username": "Kamposter",
                                "firstName": "Barys",
                                "lastName": "Kotau",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/05/06 01:23:16"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                }
                            ],
                            "total_price": 5555,
                            "delivery": {
                                "address": {
                                    "country": "Canada",
                                    "city": "Test town Colorado",
                                    "street": "492 Kings Highway",
                                    "house": 2,
                                    "flat": 3
                                },
                                "finalDate": "2025-06-10T22:00:00.000Z",
                                "condition": "Delivery"
                            },
                            "changedOn": "2025-06-01T18:12:23.000Z",
                            "action": "Delivery Scheduled",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "68196484d006ba3d4760a076",
                                "username": "Kamposter",
                                "firstName": "Barys",
                                "lastName": "Kotau",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/05/06 01:23:16"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                }
                            ],
                            "total_price": 5555,
                            "delivery": null,
                            "changedOn": "2025-06-01T02:00:47.000Z",
                            "action": "Manager Assigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "68196484d006ba3d4760a076",
                                "username": "Kamposter",
                                "firstName": "Barys",
                                "lastName": "Kotau",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/05/06 01:23:16"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                }
                            ],
                            "total_price": 5555,
                            "delivery": null,
                            "changedOn": "2025-05-31T22:54:49.000Z",
                            "action": "Manager Unassigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": null
                        },
                        {
                            "status": "Draft",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                }
                            ],
                            "total_price": 5555,
                            "delivery": null,
                            "changedOn": "2025-05-31T20:53:36.000Z",
                            "action": "Manager Assigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "68196484d006ba3d4760a076",
                                "username": "Kamposter",
                                "firstName": "Barys",
                                "lastName": "Kotau",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/05/06 01:23:16"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                }
                            ],
                            "total_price": 5555,
                            "delivery": null,
                            "changedOn": "2025-05-31T20:53:23.000Z",
                            "action": "Manager Unassigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": null
                        },
                        {
                            "status": "Draft",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                }
                            ],
                            "total_price": 5555,
                            "delivery": null,
                            "changedOn": "2025-05-31T20:42:22.000Z",
                            "action": "Manager Assigned",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": {
                                "_id": "68196484d006ba3d4760a076",
                                "username": "Kamposter",
                                "firstName": "Barys",
                                "lastName": "Kotau",
                                "roles": [
                                    "USER"
                                ],
                                "createdOn": "2025/05/06 01:23:16"
                            }
                        },
                        {
                            "status": "Draft",
                            "customer": "6831a905d006ba3d4762237f",
                            "products": [
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                }
                            ],
                            "total_price": 5555,
                            "delivery": null,
                            "changedOn": "2025-05-26T21:30:53.000Z",
                            "action": "Customer changed",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": null
                        },
                        {
                            "status": "Draft",
                            "customer": "683460e774f4c4971b903936",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 5555,
                            "delivery": null,
                            "changedOn": "2025-05-26T20:23:54.000Z",
                            "action": "Customer changed",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": null
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                },
                                {
                                    "_id": "68336e2a74f4c4971b9009ae",
                                    "name": "Test example",
                                    "amount": 2,
                                    "price": 1111,
                                    "manufacturer": "Samsung",
                                    "notes": "New",
                                    "received": false
                                }
                            ],
                            "total_price": 5555,
                            "delivery": null,
                            "changedOn": "2025-05-26T20:23:54.000Z",
                            "action": "Requested products changed",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": null
                        },
                        {
                            "status": "Draft",
                            "customer": "683464b774f4c4971b90396d",
                            "products": [
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                },
                                {
                                    "_id": "6833842574f4c4971b90169c",
                                    "name": "Anatolyzvnxcv mc",
                                    "amount": 85,
                                    "price": 55412,
                                    "manufacturer": "Samsung",
                                    "notes": "Жопа",
                                    "received": false
                                }
                            ],
                            "total_price": 277060,
                            "delivery": null,
                            "changedOn": "2025-05-26T20:23:38.000Z",
                            "action": "Order created",
                            "performer": {
                                "_id": "67c4c707c41258c86507d85d",
                                "username": "aqacourse@gmail.com",
                                "firstName": "Admin",
                                "lastName": "Admin",
                                "roles": [
                                    "ADMIN"
                                ],
                                "createdOn": "2025/03/02 22:00:55"
                            },
                            "assignedManager": null
                        }
                    ],
                    "assignedManager": {
                        "_id": "680d4d7dd006ba3d475ff67b",
                        "username": "OlgaMarushkina",
                        "firstName": "Olga",
                        "lastName": "Marushkina",
                        "roles": [
                            "USER"
                        ],
                        "createdOn": "2025/04/26 21:17:49"
                    }
                }
            ],
            "ordersCountPerDay": []
        },
        "customers": {
            "totalNewCustomers": 362,
            "topCustomers": [
                {
                    "_id": "683464b774f4c4971b90396d",
                    "totalSpent": 831180,
                    "ordersCount": 3,
                    "customerName": "Test siHEyDbWnhZpyOVCeudEdTVFKjQLIAAjJnU",
                    "customerEmail": "test1748264120331@gmail.com"
                },
                {
                    "_id": "68263e17d006ba3d47616b96",
                    "totalSpent": 407484,
                    "ordersCount": 1,
                    "customerName": "Test oLkAAzQUjIGJGPAbrfyHRHKHOInFhYOeVcw",
                    "customerEmail": "test1747336726866@gmail.com"
                },
                {
                    "_id": "67c487907b4bcc16671b087a",
                    "totalSpent": 357372,
                    "ordersCount": 9,
                    "customerName": "Name BKSCQwsPdnlIojWIaEGcTfqNVDAfnDSrCTd",
                    "customerEmail": "Abbey_Predovic@gmail.com"
                }
            ],
            "customerGrowth": [
                {
                    "date": {
                        "year": 2025,
                        "month": 5,
                        "day": 23
                    },
                    "count": 2
                },
                {
                    "date": {
                        "year": 2025,
                        "month": 5,
                        "day": 24
                    },
                    "count": 37
                },
                {
                    "date": {
                        "year": 2025,
                        "month": 5,
                        "day": 25
                    },
                    "count": 7
                },
                {
                    "date": {
                        "year": 2025,
                        "month": 5,
                        "day": 26
                    },
                    "count": 27
                },
                {
                    "date": {
                        "year": 2025,
                        "month": 5,
                        "day": 27
                    },
                    "count": 28
                },
                {
                    "date": {
                        "year": 2025,
                        "month": 5,
                        "day": 28
                    },
                    "count": 5
                },
                {
                    "date": {
                        "year": 2025,
                        "month": 5,
                        "day": 29
                    },
                    "count": 21
                },
                {
                    "date": {
                        "year": 2025,
                        "month": 5,
                        "day": 30
                    },
                    "count": 28
                },
                {
                    "date": {
                        "year": 2025,
                        "month": 5,
                        "day": 31
                    },
                    "count": 0
                },
                {
                    "date": {
                        "year": 2025,
                        "month": 6,
                        "day": 1
                    },
                    "count": 0
                },
                {
                    "date": {
                        "year": 2025,
                        "month": 6,
                        "day": 2
                    },
                    "count": 2
                },
                {
                    "date": {
                        "year": 2025,
                        "month": 6,
                        "day": 3
                    },
                    "count": 23
                },
                {
                    "date": {
                        "year": 2025,
                        "month": 6,
                        "day": 4
                    },
                    "count": 27
                },
                {
                    "date": {
                        "year": 2025,
                        "month": 6,
                        "day": 5
                    },
                    "count": 36
                },
                {
                    "date": {
                        "year": 2025,
                        "month": 6,
                        "day": 6
                    },
                    "count": 8
                }
            ]
        },
        "products": {
            "topProducts": [
                {
                    "name": "Anatolyzvnxcv mc",
                    "sales": 15
                },
                {
                    "name": "Test example",
                    "sales": 15
                },
                {
                    "name": "Ball54972",
                    "sales": 10
                },
                {
                    "name": "Bacon108",
                    "sales": 3
                },
                {
                    "name": "aaa",
                    "sales": 3
                }
            ]
        }
    },
    "ErrorMessage": null
}