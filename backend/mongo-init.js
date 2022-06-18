let tmp = db

db.createUser(
    {
        user: "admin",
        pwd: "admin",
        roles: [
            {
                role: "admin",
                db: tmp.name
            }
        ]
    }
);