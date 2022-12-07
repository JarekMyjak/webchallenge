import React, {useEffect, useState} from 'react';
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
    UploadButton,
    PremiumButton,
} from './topSection.styles';
import fistCardImg from '../../assets/images/landing/First_card.jpg';
import {
    downloadChallengeUrl,
    getPremiumChallenge,
} from '../../api/apiChallenges';
import remarkGfm from 'remark-gfm';
import {useUser} from '../../api/useAuth';

export const enum techs {
    html = 'HTML',
    css = 'CSS',
    react = 'REACT',
    js = 'JAVASCRIPT',
    ts = 'TYPESCRIPT',
    api = 'API',
}

interface ITopSection {
    image: string[];
    exp: string;
    technologies: techs[];
    premium?: boolean;
    title?: string;
    description?: string;
    details?: string;
    id: any;
    onUploadClick(): void;
}

const TopSection: React.FC<ITopSection> = props => {
    const [premiumUrl, setPremiumUrl] = useState('');
    const [view, setView] = useState('desktop');
    const user = useUser(store => store.user);

    useEffect(() => {
        (async () => {
            setPremiumUrl(await getPremiumChallenge(props?.id));
        })();
    }, []);

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
    const imageSwitch = () => {
        switch (view) {
            case 'desktop':
                return (
                    props.image.filter(img =>
                        img.toLowerCase().includes('desktop')
                    )[0] || props.image[0]
                );
            case 'desktop-active':
                return (
                    props.image.filter(img =>
                        img.toLowerCase().includes('desktop-active')
                    )[0] || props.image[1]
                );
            case 'mobile':
                return (
                    props.image.filter(img =>
                        img.toLowerCase().includes('mobile')
                    )[0] || props.image[2]
                );
            default:
                return props.image[0];
        }
    };

    return (
        <div>
            <Wrapper>
                <ImageAndButtons>
                    <ImageWrapper>
                        <Image src={imageSwitch()} />
                    </ImageWrapper>
                    <ButtonsWrapper>
                        <ButtonView
                            active={view === 'desktop'}
                            onClick={() => {
                                setView('desktop');
                            }}
                        >
                            Desktop design
                        </ButtonView>
                        <ButtonView
                            active={view === 'mobile'}
                            onClick={() => {
                                setView('mobile');
                            }}
                        >
                            Mobile design
                        </ButtonView>
                        <ButtonView
                            active={view === 'desktop-active'}
                            onClick={() => {
                                setView('desktop-active');
                            }}
                        >
                            {' '}
                            Active states
                        </ButtonView>
                    </ButtonsWrapper>
                </ImageAndButtons>
                <ChallengeData>
                    <Info>
                        <TitleBar>
                            <Title>{props.title}</Title>
                            <Status isPremium={true}>{true ? 'P' : 'F'}</Status>
                        </TitleBar>
                        <Description>{props.description}</Description>
                        <TechnologiesAndExperience>
                            <Technologies>
                                <Title>Technologies</Title>
                                <TechnologiesList>
                                    {props.technologies.map(el => (
                                        <span key={el} className={el}>
                                            {el}
                                        </span>
                                    ))}
                                </TechnologiesList>
                            </Technologies>
                            <Experience>
                                <Title>Experience required</Title>
                                <span>{experienceSwitch()}</span>
                            </Experience>
                        </TechnologiesAndExperience>
                    </Info>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                        }}
                    >
                        <StartButton href={downloadChallengeUrl(props?.id)}>
                            Download
                        </StartButton>
                        <PremiumButton
                            href={user?.premium ? premiumUrl : undefined}
                            isPremium={user?.premium}
                        >
                            Download <br />
                            Premium File
                        </PremiumButton>
                        <UploadButton onClick={props.onUploadClick}>
                            Upload
                        </UploadButton>
                    </div>
                </ChallengeData>
            </Wrapper>
            <ReactMarkdownCustom
                children={props.details as string}
                remarkPlugins={[remarkGfm]}
            />
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
