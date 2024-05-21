"use client";
import useData from "../hooks/useData";

export default function Flashcard() {
    const endPoint =
        "https://quizapi.io/api/v1/questions?apiKey=" +
        process.env.NEXT_PUBLIC_QUIZ_API_KEY +
        "&limit=10";
    const { data } = useData(endPoint);
    console.log(data);

    return (
        <div className="flex flex-col w-80 h-96 rounded-lg justify-center items-center [perspective:1000px]">
            <div
                className={
                    "relative w-full h-full transition-all rounded-lg shadow-lg bg-orange-200 duration-500 [transform-style:preserve-3d] [backface-visibility:hidden] hover:[transform:rotateY(180deg)]"
                }
            >
                {/*card content on front side*/}
                <div className="absolute inset-0 overflow-y-auto">a</div>
                    {/*card content on back side*/}
                <div className="absolute inset-0 rounded-lg shadow-lg bg-orange-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    b
                </div>
            </div>
        </div>
    );
}