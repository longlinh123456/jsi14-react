interface AccountData {
	email: string
	password: string
}

const data: Record<string, AccountData> = JSON.parse(localStorage.getItem("data") as string) || {}
export default class accountDB {
	static signUp(email: string, password: string): boolean {
		if (data[email]) {
			return false
		}
		data[email] = {
			email: email,
			password: password
		}
		localStorage.setItem("data", JSON.stringify(data))
		this.#setCurrentAccount(data[email])
		return true
	}
	static logIn(email: string, password: string): boolean {
		const account = data[email]
		const success = account?.password === password
		this.#setCurrentAccount(account)
		return success
	}
	static logOut() {
		sessionStorage.setItem("account", "null")
	}
	static #setCurrentAccount(account: AccountData) {
		sessionStorage.setItem("account", JSON.stringify(account))
	}
	static getCurrentAccount(): AccountData | null {
		return JSON.parse(sessionStorage.getItem("account") as string)
	}
	static resetPassword(email: string, password: string): boolean {
		if (data[email]) {
			data[email].password = password
			localStorage.setItem("data", JSON.stringify(data))
			return true
		}
		return false
	} // extremely insecure btw
}