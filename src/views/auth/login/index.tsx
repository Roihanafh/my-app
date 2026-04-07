import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import style from "./login.module.scss";

const Tampilanlogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const { push, query } = useRouter();
    const callbackUrl: any = query.callbackUrl || "/";
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>,) => {
        event.preventDefault();
        setError("");

        const form = event.currentTarget;
        const formData = new FormData(event.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("Password") as string;

        if (!email) {
            setError("Email wajib diisi");
            return;
        }

        if (!password || password.length < 6) {
            setError("Password minimal 6 karakter");
            return;
        }

        setIsLoading(true);
        const callbackUrl = (query.callbackUrl as string) || "/";

        try {
            const res = await signIn("credentials", {
                redirect: false,
                email,
                password,
                callbackUrl,
            });

            // console.log("signIn response:", res);
            if (!res?.error) {
                setIsLoading(false);
                push(callbackUrl);
            } else {
                setIsLoading(false);
                setError(res?.error || "Login failed");
            }
        } catch (error) {
            setIsLoading(false);
            setError("wrong email or password");
        }
    };

    return (
        <>
            <div className={style.login}>
                {error && <p className={style.login__error}>{error}</p>}
                <h1 className={style.login__title}>Halaman login</h1>
                <div className={style.login__form}>
                    <form onSubmit={handleSubmit}>
                        <div className={style.login__form__item}>
                            <label
                                htmlFor="email"
                                className={style.login__form__item__label}
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                className={style.login__form__item__input}
                            />
                        </div>
                        <div className={style.login__form__item}>
                            <label
                                htmlFor="Password"
                                className={style.login__form__item__label}
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="Password"
                                name="Password"
                                placeholder="Password"
                                className={style.login__form__item__input}
                            />
                        </div>
                        <button
                            type="submit"
                            className={style.login__form__item__button}
                            disabled={isLoading}
                        >
                            {isLoading ? "Loading..." : "login"}
                        </button>
                        <br /><br />
                        <button
                            type="button"
                            onClick={()=>signIn("google", { callbackUrl, redirect:false})}
                            className={style.login__form__item__button}
                            disabled={isLoading}
                        >
                            {isLoading ? "Loading..." : "Sign in with Google"}    

                        </button>
                        <br /><br />
                        <button
                            type="button"
                            onClick={()=>signIn("github", { callbackUrl, redirect:false})}
                            className={style.login__form__item__button}
                            disabled={isLoading}
                        >
                            {isLoading ? "Loading..." : "Sign in with Github"}
                        </button>
                    </form>
                    <br />
                    <p className={style.login__form__item__text}>
                        TIdak punya akun? <Link href="/auth/register">Ke Halaman Register</Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Tampilanlogin;
