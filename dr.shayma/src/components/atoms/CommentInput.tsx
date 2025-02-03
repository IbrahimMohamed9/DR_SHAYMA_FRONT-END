import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { AiOutlineComment } from "react-icons/ai";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "./Button";
import { RestClient } from "../../assets/customHooks/RestClient";
import { useRecoilState } from "recoil";
import articleCommentsState from "../../assets/atoms/articleCommentsState";

const CommentInput = () => {
  const [isInputActive, setIsInputActive] = useState(false);
  const [comments, setComments] = useRecoilState(articleCommentsState);
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<{ comment: string }>();

  const shouldShowSubmitIcon =
    isInputActive || (getValues("comment") && getValues("comment") === "");

  const iconBaseClassNames = `absolute translate-center-y w-8 h-8 transition-all duration-1000 ${
    shouldShowSubmitIcon ? "-left-1 " : "left-[calc(100%-2.5rem)] "
  }`;

  const commentIconVisibility = shouldShowSubmitIcon
    ? "opacity-0"
    : "opacity-100";
  const submitIconVisibility = shouldShowSubmitIcon
    ? "opacity-100"
    : "opacity-0";

  const handleInputFocus = () => {
    setIsInputActive(true);
  };

  const onSubmit: SubmitHandler<any> = async (comment) => {
    const { data } = await RestClient("comments", "POST", {
      ...comment,
      name: "test test",
      imgSrc: "",
    });

    const commentList = [...comments, data];

    setComments(commentList);
    console.log(commentList);
  };

  const handleInputBlur = () => {
    if (getValues("comment").trim() === "") {
      setIsInputActive(false);
      setValue("comment", "");
    }
  };

  return (
    <form
      className="w-full rounded-2xl relative"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="relative">
        <AiOutlineComment
          className={iconBaseClassNames + commentIconVisibility}
        />
        <Button
          className={iconBaseClassNames + submitIconVisibility}
          type="submit"
        >
          <BsFillArrowLeftSquareFill
            className={iconBaseClassNames + submitIconVisibility}
          />
        </Button>
        <input
          onFocus={handleInputFocus}
          className="w-full p-4 rounded-2xl bg-gray-700 focus:bg-gray-400 transition-all"
          {...register("comment", {
            required: true,
            minLength: {
              value: 5,
              message: "يجب أن يكون التعليق بطول 5 أحرف على الأقل",
            },
            maxLength: {
              value: 108,
              message: "يجب أن يكون التعليق بطول 108 أحرف كحد اقصي",
            },
            onBlur: handleInputBlur,
          })}
        />
      </div>
      {errors.comment && (
        <p className="text-red-500 text-sm">{errors.comment.message}</p>
      )}
    </form>
  );
};

export default CommentInput;
