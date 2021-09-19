use compiler::{
    error::PrettyErrorHandler,
    parser::{ParseOption, Parser},
    tokenizer::{self, TokenizeOption},
    util::{self, ast_print::AstString},
};
fn main() {
    let file = r#"
    <template>
        <div aaa="true" v-bind:test.passive.prevent="result">
            test {{result}}
            <!-- comment -->
        </div>
    </template>
    "#;
    let tokenizer = tokenizer::Tokenizer::new(TokenizeOption::default());
    let tokens = tokenizer.scan(file, PrettyErrorHandler::new(file));
    let parser = Parser::new(ParseOption::default());
    let res = parser.parse(tokens, PrettyErrorHandler::new(file));
    println!("{}", res.ast_string(0));
}
