export default function generate_error(message: string) {
    return {
        message: message,
        success: false,
    }
}