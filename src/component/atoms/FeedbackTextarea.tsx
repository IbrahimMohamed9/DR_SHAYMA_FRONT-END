import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FC } from "react";
import Grid from "@mui/material/Grid2";

type FeedbackTextareaProps = {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
};
const FeedbackTextarea: FC<FeedbackTextareaProps> = ({ errors, register }) => {
  return (
    <Grid size={{ xs: 12, sm: 12, md: 12 }}>
      <div className="max-w-full">
        <textarea
          className={`box-border w-full border-[1px] border-[#0000003b]
                leading-relaxed p-2 rounded-[4px] shadow-md shadow-gray-50
                focus:border-2 focus-visible:outline-none ${
                  errors["message"]
                    ? "border-red-500"
                    : "focus:border-[#1976d2]"
                }`}
          rows={3}
          aria-label="maximum height"
          placeholder="اكتب الرسالة"
          {...register("message", {
            required: "الرجاء كتابة الرسالة",
          })}
        ></textarea>
        {errors["message"]?.message && (
          <span className="text-[#d32f2f] text-xs relative right-3 bottom-2">
            {`*${errors["message"].message}`}
          </span>
        )}
      </div>
    </Grid>
  );
};

export default FeedbackTextarea;
