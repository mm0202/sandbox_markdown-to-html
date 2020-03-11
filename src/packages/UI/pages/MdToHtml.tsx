import React from 'react';
import {TextField, Button} from '@material-ui/core';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const md = localStorage.getItem('md');

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        common: {
            marginTop: theme.spacing(1),
            width: "50%",
        },
    }),
);

function MdToHtml() {
    const classes = useStyles();
    const [markdown, setMarkdown] = React.useState(md ? md : "");

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMarkdown(e.target.value);
        localStorage.setItem('md', e.target.value);
    };

    const copyFromHtml = (str: string) => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(str);
        } else{
            alert("Async Clipboard APIに対応していません。")
        }
    };

    const pasteToMarkdown = () => {
        if (navigator.clipboard) {
            navigator.clipboard.readText()
                .then(function (text) {
                    setMarkdown(text);
                    localStorage.setItem('md', text);
                });
        } else {
            alert("Async Clipboard APIに対応していません。")
        }
    };

    const createHtmlStringFromMarkdown = (markdown: string) => {
        return markdown
            .replace(/^### (.*)$/gm, '<h3 class="style4a">$1</h3>')
            .replace(/^## (.*)$/gm, '<h2 class="style3a">$1</h2>')
            .replace(/```([^\n]*)\n([^`]*)```/g, '<pre class="lang:default decode:true ">$2</pre>')
            .replace(/`([^`]+)`/g, '<span class="lang:default decode:true  crayon-inline ">$1</span>')
            .replace(/__((?!__).+)__/g, '<span style="background-color: #ffff99;">$1</span>')
            .replace(/\[([^[\]]*)]\(([^()]*)\)/g, '<a href="$2">$1</a>')
            .replace(/^\* (.*)$/gm, '● $1')
    }

    const createPreviewStringFromHtmlString = (html_string: string) => {
        return html_string
            .replace(/\n/g, '<br>')
            .replace('</h3><br>', '</h3>')
            .replace('</h2><br>', '</h2>')
            .replace('</pre><br>', '</pre>')
    }

    const html_string = createHtmlStringFromMarkdown(markdown);
    const preview_string = createPreviewStringFromHtmlString(html_string);
    return (
        <div>
            <div>
                <TextField
                    id="md-text-field"
                    className={classes.common}
                    label="Markdown"
                    multiline
                    rows="10"
                    variant="outlined"
                    value={markdown}
                    onChange={handleTextChange}
                />
                <TextField
                    id="html-text-field"
                    className={classes.common}
                    label="Html"
                    multiline
                    rows="10"
                    variant="outlined"
                    value={html_string}
                    disabled
                />
            </div>
            {/*<Button id="paste" onClick={() => pasteToMarkdown()}>paste to markdown</Button>*/}
            <Button id="copy" onClick={() => copyFromHtml(html_string)}>copy from html</Button>
            <div className={"preview p-entry__body"}>
                <h1>Preview</h1>
                <hr/>
                <span dangerouslySetInnerHTML={{__html: preview_string}}/>
            </div>
        </div>
    );
}

export default MdToHtml;