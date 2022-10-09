import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--gray-4);
  gap: 50px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 370px;
    max-height: 500px;
    width: 100%;
    height: 100%;
    padding: 42px 22px;
    gap: 22px;
    background-color: var(--gray-3);
    border-radius: var(--base-radius);
    color: white;
  }

  h1 {
    font-size: var(--title-size);
  }

  label {
    display: flex;
    flex-direction: column;
    font-size: var(--headline-size);
    gap: 10px;
  }

  input,
  .register,
  .loginButton {
    max-width: 370px;
    width: 300px;
    height: 50px;
    border-radius: var(--base-radius);
    border: none;
    background-color: var(--gray-2);
    color: white;
    padding: 10px;
  }

  input:focus {
    outline: 1px solid var(--color-primary);
  }

  .register {
    background-color: var(--gray-1);
  }
  .register:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }

  .loginButton {
    background-color: var(--color-primary);
  }

  .loginButton:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }

  p {
    font-size: var(--headline-size);
    color: var(--negative);
  }
`;
