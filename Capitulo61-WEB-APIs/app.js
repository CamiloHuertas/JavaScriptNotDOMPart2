//API significa aplication programming interface
// DOM = Document Object Model
// BOM = Browser Object Model
// CSSOM = CSS object model

console.log(this)

let texto = `

Line of Reasoning
What is the Argument?
The conclusion (position) supported by a series of connected premises (claims or reasons) that are supported by evidence.

What is the Line of Reasoning?
The formal structure of an argument. In other words, the way that claims and reasons are arranged to lead to the conclusion.

Identifying the Line of Reasoning
Another way to think of line of reasoning is that it is an author’s  train of thought, the arrangement of his ideas. Often, we can  identify a writer’s overall claim  early  in  the  passage,  then  use  the rest of the content to strengthen the overall claim by making supporting claims (reasons) and including specific evidence to support the claims. However, as we encounter more sophisticated writing, we begin to see that an effective line of reasoning may present the overall claim at the end of the passage. Both  modes are appropriate—as long as the claims, reasons, and  evidence work together to construct a clear and strong argument.

Evaluating the Line of Reasoning
Like everything in the AP® English Language, identifying something is never enough. The objectives in this course require that you can evaluate the effectiveness of an author’s line of reasoning and develop a successful line of reasoning of  your own. The good news is that once you can evaluate the line of reasoning in an argument, you should be able to create a strong line of reasoning. Below are questions that you can use to help evaluate and develop a line of reasoning?
What is the author’s overall claim? Where is it presented? Is it explicitly stated or implied? How do these choices impact the strength of the argument?
What is the writer’s first supporting claim (reason)? How does it connect to the thesis? Does the writer include specific evidence to support this claim? Why or why not?
What are the following supporting claims (reason)? How do they connect? (Are they similar? Does one further prove the previous claim? Does one offer a counter-argument and the next present a refutation?) How do they connect to the overall argument? Are there specific pieces of evidence to support these supporting claims (reasons), why or why not?
Finally, how do the pieces work together to prove the overall argument? What does the arrangement reveal about the writer’s understanding of the rhetorical situation?

`

const hablar = (texto) =>
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto))

hablar(texto)
