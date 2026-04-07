import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import style from "./register.module.scss";

const TampilanRegister = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const { push } = useRouter();
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>,) => {
        event.preventDefault();
        setError("");

        const form = event.currentTarget;
        const formData = new FormData(event.currentTarget);
        const email = formData.get("email") as string;
        const fullname = formData.get("Fullname") as string;
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
        const response = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, fullname, password }),
        });
        // const result = await response.json();
        // console.log(result);
        if (response.status === 200) {
            form.reset();
            setIsLoading(false);
            push("/auth/login");
        } else {
            setIsLoading(false);
            setError(
                response.status === 400
                    ? "Email already exists" : "An error occurred",
            );
        }
    };

    return (
        <div className={style.register}>
            {error && <p className={style.register__error}>{error}</p>}
            <h1 className={style.register__title}>Halaman Register</h1>
            <div className={style.register__form}>
                <form onSubmit={handleSubmit}>
                    <div className={style.register__form__item}>
                        <label
                            htmlFor="email"
                            className={style.register__form__item__label}
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            className={style.register__form__item__input}
                        />
                    </div>
                    <div className={style.register__form__item}>
                        <label
                            htmlFor="Fullname"
                            className={style.register__form__item__label}
                        >
                            Fullname
                        </label>
                        <input
                            type="text"
                            id="Fullname"
                            name="Fullname"
                            placeholder="Fullname"
                            className={style.register__form__item__input}
                        />
                    </div>
                    <div className={style.register__form__item}>
                        <label
                            htmlFor="Password"
                            className={style.register__form__item__label}
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="Password"
                            name="Password"
                            placeholder="Password"
                            className={style.register__form__item__input}
                        />
                    </div>
                    <button
                        type="submit"
                        className={style.register__form__item__button}
                        disabled={isLoading}
                    >
                        {isLoading ? "Loading..." : "Register"}
                    </button>
                </form>
                <br />
                <p className={style.register__form__item__text}>
                    Sudah punya akun? <Link href="/auth/login">Ke Halaman Login</Link>
                </p>
            </div>
        </div>
    );
};

export default TampilanRegister;
