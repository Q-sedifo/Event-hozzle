"use client"
import { Formik } from "formik";
import { BaseInput } from "@/shared/ui/inputs/BaseInput";
import { BaseTextarea } from "@/shared/ui/textareas/BaseTextarea";
import { BaseButton } from "@/shared/ui/buttons/BaseButton";
import { BaseError } from "@/shared/ui/errors/BaseError";
import { BaseCheckbox } from "@/shared/ui/checkboxes/BaseCheckbox";
import { Estimate } from "@/shared/ui/inputs/Estimate";

const initialValues = {
  name: "",
  email: "",
  review: "",
  saveData: false,
  cleanliness: 0,
  accuracy: 0,
  location: 0,
  checkIn: 0,
  communication: 0,
  value: 0
}

export const CommentForm = () => {
  const handleSubmit = (values: any) => {
    console.log("Comment", values)
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ values, errors, setFieldValue, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div></div>
            <div className="flex flex-col items-center gap-5 md:flex-row">
              <div className="w-full md:flex-1">
                <BaseError error={errors.name} />
                <BaseInput
                  placeholder="Name"
                  type="text"
                  className="w-full rounded border p-3 bg-white shadow-md"
                  onChange={(data) => setFieldValue("name", data)}
                  value={values.name}
                />
              </div>
              <div className="w-full md:flex-1">
                <BaseError error={errors.email} />
                <BaseInput
                  placeholder="Email"
                  type="text"
                  className="w-full rounded border p-3 bg-white shadow-md"
                  onChange={(data) => setFieldValue("email", data)}
                  value={values.email}
                />
              </div>
            </div>
            <div>
              <BaseTextarea 
                placeholder="Your review" 
                className="w-full h-[150px] rounded border p-3 bg-white shadow-md" 
              />
            </div>
            <div className="flex items-center gap-4">
              <BaseCheckbox 
                value={values.saveData} 
                onChange={(data: boolean) => setFieldValue("saveData", data)}
                label="Save my name, email, and website in this browser for the next time I comment"
              />
            </div>
            <div>
              <BaseButton 
                text="Submit" 
                variant="rounded" 
                type="submit" 
                className="bg-cyan text-white px-10 font-bold"
              />
            </div>
          </form>
        )}
      </Formik>
    </>
  )
}