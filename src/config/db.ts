
const release = false
const configAll = {
    debug: {
        sql: {
            // sqlServer: "132.232.22.58",
            sqlServer: "localhost",
            sqlDatabase: "sportstest",
            sqlUser: "root",
            sqlpwd: "123456"
        }
    },
    release: {
        sql: {
            sqlServer: "132.232.22.58",
            sqlDatabase: "sportproduction",
            sqlUser: "root",
            sqlpwd: "123456"
        }
    }
}

const config = release ? configAll.release : configAll.debug

export default config