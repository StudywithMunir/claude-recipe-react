import ReactMarkdown from "react-markdown"; //for formatting
import remarkGfm from "remark-gfm";
export default function ClaudeRecipe(props) {
    return (
        <section className="suggested-recipe-container">
            <h2>Chef Claude Recommends: </h2>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {props.recipe}
            </ReactMarkdown>
        </section>
    )
}