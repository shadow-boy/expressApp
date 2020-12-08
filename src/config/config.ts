
const release = false
const configAll = {
    debug: {
        sql: {
            sqlServer: "",
            sqlDatabase: "",
            sqlUser: "",
            sqlpwd: ""
        }
    },
    release: {
        sql: {
            sqlServer: "",
            sqlDatabase: "",
            sqlUser: "",
            sqlpwd: ""
        }
    }
}

const config = release ? configAll.release : configAll.debug

export default config