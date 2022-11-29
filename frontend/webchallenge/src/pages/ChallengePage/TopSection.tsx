import React from 'react';
import {
    Image,
    Wrapper,
    ImageAndButtons,
    ImageWrapper,
    ButtonsWrapper,
    ButtonView,
    ChallengeData,
    Info,
    TitleBar,
    Title,
    Status,
    Description,
    TechnologiesAndExperience,
    Technologies,
    TechnologiesList,
    Experience,
    StartButton,
    ReactMarkdownCustom,
} from './topSection.styles';
import fistCardImg from '../../assets/images/landing/First_card.jpg';
import {downloadChallengeUrl} from '../../api/apiChallenges';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const enum techs {
    html = 'HTML',
    css = 'CSS',
    react = 'REACT',
    js = 'JAVASCRIPT',
    ts = 'TYPESCRIPT',
    api = 'API',
}

interface ITopSection {
    exp?: 'beginner' | 'intermediate' | 'advanced';
    technologies?: techs[];
    premium?: boolean;
    title?: string;
    id: any;
    onUploadClick(): void;
}

const TopSection: React.FC<ITopSection> = props => {
    const experienceSwitch = () => {
        switch (props.exp) {
            case 'beginner':
                return <span className={props.exp}>beginner</span>;
            case 'intermediate':
                return <span className={props.exp}>intermediate</span>;
            case 'advanced':
                return <span className={props.exp}>advanced</span>;
            default:
                return <span>unspecified</span>;
        }
    };

    return (
        <div>
            <Wrapper>
                <ImageAndButtons>
                    <ImageWrapper>
                        <Image src={fistCardImg} />
                    </ImageWrapper>
                    <ButtonsWrapper>
                        <ButtonView active={true}>Desktop design</ButtonView>
                        <ButtonView>Mobile design</ButtonView>
                        <ButtonView>Active states</ButtonView>
                    </ButtonsWrapper>
                </ImageAndButtons>
                <ChallengeData>
                    <Info>
                        <TitleBar>
                            <Title>{props.title}</Title>
                            <Status isPremium={true}>{true ? 'P' : 'F'}</Status>
                        </TitleBar>
                        <Description>
                            If you are going to use a passage of Lorem Ipsum,
                            you need to be sure there isn't anything
                            embarrassing hidden in the middle of text.
                        </Description>
                        <TechnologiesAndExperience>
                            <Technologies>
                                <Title>Technologies</Title>
                                <TechnologiesList>
                                    {/* CHECK CHALLANGECARD IN FUTURE  */}
                                    <span className={techs.api}>
                                        {techs.api}
                                    </span>
                                    <span className={techs.html}>
                                        {techs.html}
                                    </span>
                                    <span className={techs.css}>
                                        {techs.css}
                                    </span>
                                    <span className={techs.ts}>{techs.ts}</span>
                                    <span className={techs.react}>
                                        {techs.react}
                                    </span>
                                </TechnologiesList>
                            </Technologies>
                            <Experience>
                                <Title>Experience required</Title>
                                <span>{experienceSwitch()}</span>
                            </Experience>
                        </TechnologiesAndExperience>
                    </Info>
                    <StartButton href={downloadChallengeUrl(props?.id)}>
                        Download
                    </StartButton>
                    <StartButton onClick={props.onUploadClick}>
                        Upload
                    </StartButton>
                </ChallengeData>
            </Wrapper>
            <ReactMarkdownCustom children={xd} remarkPlugins={[remarkGfm]} />
        </div>
    );
};

export default TopSection;

const xd = `# H1
## H2
### H3
#### H4
##### H5
###### H6

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------
Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.

⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links. 
http://www.example.com or <http://www.example.com> and sometimes 
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links. 
http://www.example.com or <http://www.example.com> and sometimes 
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

Here's our logo (hover to see the title text):

Inline-style: 
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style: 
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"
\`\`\`js
this is a code sample
\`\`\`
`;
