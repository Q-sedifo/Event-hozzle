"use client";
import { Formik } from "formik";
import { BaseInput } from "@/shared/ui/inputs/BaseInput";
import { BaseTextarea } from "@/shared/ui/textareas/BaseTextarea";
import { BaseButton } from "@/shared/ui/buttons/BaseButton";
import { BaseError } from "@/shared/ui/errors/BaseError";
import { BaseCheckbox } from "@/shared/ui/checkboxes/BaseCheckbox";
import { Estimate } from "@/shared/ui/inputs/Estimate";
import { reviewSchema } from "@/shared/validation/review/addReviewValidation";

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
  value: 0,
};

export const CommentForm = () => {
  const handleSubmit = (values: any) => {
    console.log("Comment", values);
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={reviewSchema} validateOnChange={false}>
        {({ values, errors, setFieldValue, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="mt-5 grid grid-cols-1 gap-2 border-b pb-5 text-[20px] md:grid-cols-3">
              <div className="flex flex-col gap-2">
                <span className="text-[16px] font-semibold">Cleanliness</span>
                <BaseError error={errors.cleanliness}/>
                <Estimate active={true} onChange={(value) => setFieldValue("cleanliness", value)} rate={values.cleanliness}/>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-[16px] font-semibold">Accuracy</span>
                <Estimate active={true} onChange={(value) => setFieldValue("accuracy", value)} rate={values.accuracy}/>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-[16px] font-semibold">Location</span>
                <Estimate active={true} onChange={(value) => setFieldValue("location", value)} rate={values.location}/>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-[16px] font-semibold">Check-in</span>
                <Estimate active={true} onChange={(value) => setFieldValue("checkIn", value)} rate={values.checkIn}/>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-[16px] font-semibold">Communication</span>
                <Estimate active={true} onChange={(value) => setFieldValue("communication", value)} rate={values.communication}/>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-[16px] font-semibold">Value</span>
                <Estimate active={true} onChange={(value) => setFieldValue("value", value)} rate={values.value}/>
              </div>
            </div>
            <div className="flex flex-col items-center gap-5 md:flex-row">
              <div className="w-full md:flex-1">
                <BaseError error={errors.name} />
                <BaseInput
                  placeholder="Name"
                  type="text"
                  className="w-full rounded border bg-white p-3 shadow-md"
                  onChange={(data) => setFieldValue("name", data)}
                  value={values.name}
                />
              </div>
              <div className="w-full md:flex-1">
                <BaseError error={errors.email} />
                <BaseInput
                  placeholder="Email"
                  type="text"
                  className="w-full rounded border bg-white p-3 shadow-md"
                  onChange={(data) => setFieldValue("email", data)}
                  value={values.email}
                />
              </div>
            </div>
            <div>
              <BaseError error={errors.review} />
              <BaseTextarea
                placeholder="Your review"
                className="h-[150px] w-full rounded border bg-white p-3 shadow-md"
                onChange={(value) => setFieldValue("review", value)}
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
                className="bg-cyan px-10 font-bold text-white"
              />
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};
