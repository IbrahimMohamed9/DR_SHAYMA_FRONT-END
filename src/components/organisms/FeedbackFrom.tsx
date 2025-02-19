/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import RTLWraperMUI from "@molecules/RTLWraperMUI";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { FC, useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import FeedbackTextarea from "@atoms/FeedbackTextarea";
import FeedbackTextFields from "@molecules/FeedbackTextFields";
import SelectMUI from "@atoms/SelectMUI";
import Grid from "@mui/material/Grid2";
import axiosInstance from "@/config/axios";

type FeedbackFromProps = {
  contactCategories: { category: string }[];
};

const FeedbackFrom: FC<FeedbackFromProps> = ({ contactCategories }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>();
  const [categoryId, setCategoryId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePhoneChange = (value: string) => {
    setPhoneNumber(value);
  };

  const handleChangeCategory = (event: SelectChangeEvent) => {
    setCategoryId(event.target.value as string);
  };
  const onSubmit: SubmitHandler<any> = async (data) => {
    try {
      setIsSubmitting(true);
      const formData = {
        ...data,
        phoneNumber: phoneNumber,
      };
      console.log(formData);
      await axiosInstance.post("/feedbacks", formData);
      reset();
      setCategoryId("");
      setPhoneNumber("");
      // Add success message handling here if needed
    } catch (error) {
      console.error("Failed to submit feedback:", error);
      // Add error message handling here if needed
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="w-full my-8 mx-auto p-5 border-main-blue border-4 max-w-[51.875rem] shadow-2xl shadow-black"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <RTLWraperMUI className="flex gap-4 flex-wrap">
        <Grid container spacing={2}>
          <SelectMUI
            categories={contactCategories}
            value={categoryId}
            handleChange={handleChangeCategory}
            label={"نوع الاستفسار"}
            errors={errors}
            register={register}
          />

          <FeedbackTextFields
            errors={errors}
            register={register}
            handlePhoneChange={handlePhoneChange}
            phoneNumber={phoneNumber}
          />
          <FeedbackTextarea errors={errors} register={register} />
          <Grid size={{ xs: 12, sm: 12, md: 12 }}>
            <Button
              variant="contained"
              endIcon={<SendIcon className="rotate-180" />}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "جاري الإرسال..." : "ارسال"}
            </Button>
          </Grid>
        </Grid>
      </RTLWraperMUI>
    </form>
  );
};

export default FeedbackFrom;
