import { PageForm } from "./styles";

export function FormSection() {
  return (
    <>
      <PageForm>
        <Form />
      </PageForm>
    </>
  );
}
export function Form() {
  return (
    <>
      <label>
        Nome:
        <input type="text" name="nome" />
      </label>

      <label>
        E-mail:
        <input type="email" name="email" />
      </label>

      <label>
        Confirme seu e-mail:
        <input type="email" name="cofirm-email" />
      </label>

      <label>
        Telefone / Whatsapp:
        <input type="text" name="phone" />
      </label>

      <label>
        Data de nascimento:
        <input type="date" name="birth-day" />
      </label>

      <label>
        Cidade:
        <input type="text" name="city" />
      </label>

      <label>
        Escolaridade:
        <input type="text" name="education" />
      </label>

      <label>
        Tem disponibilidade para estudar no turno da noite?:
        <input type="text" name="availability" />
      </label>

      <label>
        Código promocional:
        <input type="text" name="promotional-code" />
      </label>
      </>
  );
}
