import RTLWraperMUI from "../molecules/RTLWraperMUI";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import FeedbackTextarea from "../atoms/FeedbackTextarea";
import FeedbackTextFields from "../molecules/FeedbackTextFields";
import SelectMUI from "../atoms/SelectMUI";
import Grid from "@mui/material/Grid2";

const FeedbackFrom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();
  const [category, setCategory] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const contactFormCategories = [
    { ar: "استفسار عام", en: "General Inquiry" },
    { ar: "دعم فني", en: "Technical Support" },
    { ar: "شكاوى", en: "Complaints" },
    { ar: "اقتراحات", en: "Suggestions" },
    { ar: "طلبات خاصة", en: "Special Requests" },
    { ar: "أسئلة متكررة", en: "Frequently Asked Questions" },
    { ar: "أخرى", en: "Other" },
  ];

  const handlePhoneChange = (value: string) => {
    setPhoneNumber(value);
  };

  const handleChangeCategory = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };
  const onSubmit: SubmitHandler<any> = (data) => {
    data = { ...data, phoneNumber: phoneNumber, category: category };

    console.log(data);
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
            values={contactFormCategories}
            value={category}
            handleChange={handleChangeCategory}
            label={{ ar: "نوع الاستفسار", en: "category" }}
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
            >
              ارسال
            </Button>
          </Grid>
        </Grid>
      </RTLWraperMUI>
    </form>
  );
};

export default FeedbackFrom;
