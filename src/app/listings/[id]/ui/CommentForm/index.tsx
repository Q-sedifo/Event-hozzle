"use client";
import { Formik } from "formik";
import { BaseTextarea } from "@/shared/ui/textareas/BaseTextarea";
import { BaseButton } from "@/shared/ui/buttons/BaseButton";
import { BaseError } from "@/shared/ui/errors/BaseError";
import { BaseCheckbox } from "@/shared/ui/checkboxes/BaseCheckbox";
import { Estimate } from "@/shared/ui/inputs/Estimate";
import { reviewSchema } from "@/shared/validation/review/addReviewValidation";

interface Props {
  onSubmit: any;
}

const initialValues = {
  text: "",
  saveData: false,
  cleanlines: 0,
  accuracy: 0,
  location: 0,
  check_in: 0,
  communication: 0,
  value: 0,
};

export const CommentForm = ({ onSubmit }: Props) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={reviewSchema}
        validateOnChange={false}
      >
        {({ values, errors, setFieldValue, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="mt-5 grid grid-cols-1 gap-2 border-b pb-5 text-[20px] md:grid-cols-3">
              <div className="flex flex-col gap-2">
                <span className="text-[16px] font-semibold">Cleanliness</span>
                <BaseError error={errors.cleanlines} />
                <Estimate
                  active={true}
                  onChange={(value) => setFieldValue("cleanlines", value)}
                  rate={values.cleanlines}
                />
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-[16px] font-semibold">Accuracy</span>
                <Estimate
                  active={true}
                  onChange={(value) => setFieldValue("accuracy", value)}
                  rate={values.accuracy}
                />
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-[16px] font-semibold">Location</span>
                <Estimate
                  active={true}
                  onChange={(value) => setFieldValue("location", value)}
                  rate={values.location}
                />
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-[16px] font-semibold">Check-in</span>
                <Estimate
                  active={true}
                  onChange={(value) => setFieldValue("check_in", value)}
                  rate={values.check_in}
                />
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-[16px] font-semibold">Communication</span>
                <Estimate
                  active={true}
                  onChange={(value) => setFieldValue("communication", value)}
                  rate={values.communication}
                />
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-[16px] font-semibold">Value</span>
                <Estimate
                  active={true}
                  onChange={(value) => setFieldValue("value", value)}
                  rate={values.value}
                />
              </div>
            </div>
            <div>
              <BaseError error={errors.text} />
              <BaseTextarea
                placeholder="Your review"
                className="h-[150px] w-full rounded border bg-white p-3 shadow-md"
                onChange={(value) => setFieldValue("text", value)}
                value={values.text}
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
                disabled={isSubmitting}
              />
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};
