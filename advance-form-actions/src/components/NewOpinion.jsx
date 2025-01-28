import { useActionState, useContext } from "react";
import { OpinionsContext } from "../store/opinions-context";
import Submit from "./Submit";

export function NewOpinion() {

  const { addOpinion } = useContext(OpinionsContext)
  const isNotEmpty = (value) => {
    return value !== "";
  }
  const newOpinionAction = async (prevFormState, formData) => {
    const title = formData.get("title");
    const body = formData.get("body");
    const userName = formData.get("userName");

    const errors = [];

    if (!isNotEmpty(userName)) {
      errors.push("you must fill username field");
    }
    if (!isNotEmpty(title)) {
      errors.push("you must fill title field");
    }
    if (!isNotEmpty(body)) {
      errors.push("you must fill body field");
    }

    if (errors.length > 0) {
      return {
        errors,
        enteredValues: {
          userName,
          title,
          body
        }
      }
    }

    await addOpinion({ title, body, userName });

    return {
      errors: null
    };
  }

  const [formState, formAction] = useActionState(newOpinionAction, { errors: null })


  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" defaultValue={formState.enteredValues?.userName} />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" defaultValue={formState.enteredValues?.title} />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5} defaultValue={formState.enteredValues?.body}></textarea>
        </p>

        {
          formState.errors && <ul className="errors">
            {
              formState.errors.map((error) => <li>{error}</li>)
            }
          </ul>
        }
        <Submit />


      </form>
    </div>
  );
}
