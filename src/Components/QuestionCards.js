import React from "react";

const QuestionCards = () => {
    const questions = [
        {
            question: "What is your proudest professional Achievement?",
            answer: "While this may be a very sentimental answer, I'd have to say when I was awarded national front desk associate of the year for Massage Envy. A front desk associate is a mix between clerical work, customer service, and sales.  I was surprised to be nominated at all, but it wasn’t until I was at our annual conference and won the award that I got to hear why I was nominated.  It was never about the sales but instead an appreciation of my connection to our clients, involvement in the work culture, but most of all my commitment to teamwork and genuine drive to see my peers succeed. To realize that not only my region, but the entire corporate team rewarded that behavior over sales numbers reinforced why I had been with the company the 5 years up until that point and why I’m still a member today."
        },
        {
            question: "Elaborate on a book, blog, article, or GitHub repo you read or liked recently",
            answer: "I just picked back up Clean Code by Robert C. Martin.  I like the book as it points out some of the lazy, rushed, and/or inexperienced choices developers make writing code that’s impossible to maintain and slow down productivity. Even in my previous internship it was difficult coming in and learning a lot of the legacy code because it wasn’t intuitive in many portions, which made many of my smaller tickets feel like daunting tasks (not a self-esteem builder as a young developer).  I prefer to do everything with intent and think through the solutions I’m creating so it’s nice to have direction from more experienced developers to know where to focus extra efforts."
        },
        {
            question: "Describe to a 7-year-old what Availity does.",
            answer: "Imagine that Amazon(or Walmart) doesn’t exist and you need to buy a winter coat, dog food, and a bike tire. For your coat you would probably have to go to a clothing website, but a clothing store wouldn’t have bike tires! that’d be silly. So to get your bike tire you’d go to a sports website, but they wouldn’t have dog food because that would be at a pet store website.  Would you rather go to three different websites for all that, or just use Amazon for all of it? Amazon, right? Now imagine a system like Amazon, but for doctors. The way we pay for medicine and surgeries is through a thing called insurance, and there’s a lot of different insurances to choose from. So when your parents go to the doctor and need something, the doctor has one website, called Availity, that they can go and get everything they need from the different insurance companies in one place. Just like Amazon makes our shopping easier, Availity makes doctors jobs easier when it comes to getting everything for their patients"
        }
    ]

    return (
        <>
          <h1 className = "card-title">Questions</h1>
            {
              questions.map(function(question, i) {
                  return (
                    <div key = {i} className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <h2>{question.question}</h2>
                            </div>
                            <div className="flip-card-back">
                                <p>{question.answer}</p>
                            </div>
                        </div>
                    </div>
                  )
              })
            }
        </>
    );
}

export default QuestionCards;