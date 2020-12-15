

/**
 * 返回客户端数据模型
 */
export default class WrapResponse<T>{
    success: boolean
    code: string
    message: string
    data: T
}