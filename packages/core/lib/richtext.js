import React, { createElement, Fragment } from 'react';
import PrismicRichText, { Elements } from 'prismic-richtext';
import { Link as LinkHelper } from 'prismic-helpers';
import { func, node } from 'prop-types';
import { embeds } from './embeds';


import {
    Link as PGLink,
    Title,
    Text,
    Image,
    List,
    ListItem,
    InternalGrid
} from '@paygreen/paygreen-ui';

const serialize = (
    removeP = false,
    colorType,
    colorTheme,
    linkResolver,
    type,
    element,
    content,
    children,
    index,
) => {
    if (children.length === 1 && children[0] === null) {
        return null;
    }

    switch (type) {
        case Elements.heading1:
            return (
                <Title
                    key={index}
                    htmlTag="h1"
                    textSize="xl"
                    hasUnderline={true}
                    colorTheme={colorTheme}
                    colorType={colorType}
                    marginTop="sm"
                    marginBottom="sm"
                >
                    {children}
                </Title>
            );
        case Elements.heading2:
            return (
                <Title
                    key={index}
                    htmlTag="h2"
                    textSize="lg"
                    hasUnderline={true}
                    colorTheme={colorTheme}
                    colorType={colorType}
                    marginTop="sm"
                    marginBottom="sm"
                >
                    {children}
                </Title>
            );
        case Elements.heading3:
            return (
                <Title
                    key={index}
                    htmlTag="h3"
                    textSize="md"
                    colorType={colorType}
                    colorTheme={colorTheme}
                    colorWab="grey60"
                    marginTop="sm"
                    marginBottom="sm"
                >
                    {children}
                </Title>
            );
        case Elements.heading4:
            return (
                <Title
                    key={index}
                    htmlTag="h4"
                    textSize="base"
                    colorPallet="theme"
                    colorType={colorType}
                    colorTheme={colorTheme}
                >
                    {children}
                </Title>
            );
        case Elements.heading5:
            return (
                <Title
                    key={index}
                    htmlTag="h5"
                    textSize="sm"
                    colorTheme={colorTheme}
                    colorType={colorType}
                >
                    {children}
                </Title>
            );
        case Elements.heading6:
            return (
                <Title
                    key={index}
                    htmlTag="h6"
                    textSize="xs"
                    colorType={colorType}
                    colorTheme={colorTheme}
                >
                    {children}
                </Title>
            );
        case 'PaygreenTitle':
            return <Fragment key={index}>{children}</Fragment>;
        case Elements.paragraph:
            return serializeStandardTag(
                removeP ? 'span' : 'p',
                element,
                children,
                index,
            );
        case Elements.preformatted:
            return serializeStandardTag('pre', element, children, index);
        case Elements.strong:
            return serializeStandardTag('strong', element, children, index);
        case Elements.em:
            return serializeStandardTag('em', element, children, index);
        case Elements.listItem:
            return (
                <ListItem key={index} colorTheme={colorTheme}>
                    <Text colorTheme={colorTheme}>{children}</Text>
                </ListItem>
            );
        case Elements.oListItem:
            return (
                <ListItem
                    key={index}
                    colorTheme={colorTheme}
                    bulletStyle="number"
                >
                    <Text colorTheme={colorTheme}>{children}</Text>
                </ListItem>
            );
        case Elements.list:
            return (
                <List key={index} colorTheme={colorTheme}>
                    {children}
                </List>
            );
        case Elements.oList:
            return (
                <List key={index} listStyle="number" colorTheme={colorTheme}>
                    {children}
                </List>
            );
        case Elements.image:
            return serializeImage(linkResolver, element, index);
        case Elements.embed:
            return serializeEmbed(element, index);
        case Elements.hyperlink:
            return serializeHyperlink(
                linkResolver,
                element,
                children,
                index,
                colorTheme,
                colorType,
            );
        case Elements.label:
            return serializeLabel(element, children, index);
        case Elements.span:
            return serializeSpan(content);
        default:
            return null;
    }
};

const propsWithUniqueKey = (props = {}, key) => {
    return Object.assign(props, { key });
};

const serializeStandardTag = (tag, element, children, key) => {
    const props = element.label
        ? Object.assign({}, { className: element.label })
        : {};
    return createElement(tag, propsWithUniqueKey(props, key), children);
};

const serializeHyperlink = (
    linkResolver,
    element,
    children,
    key,
    colorTheme,
    colorType,
) => {
    const targetAttr = element.data.target
        ? { target: element.data.target }
        : {};
    const relAttr = element.data.target ? { rel: 'noopener' } : {};
    const props = Object.assign(
        { href: LinkHelper.url(element.data, linkResolver) },
        targetAttr,
        relAttr,
    );
    const LinkWrapper = (
        <PGLink key={key} colorType={colorType} colorTheme={colorTheme}>
            {children}
        </PGLink>
    );
    return createElement('a', propsWithUniqueKey(props, key), LinkWrapper);
};

const serializeLabel = (element, children, key) => {
    const props = element.data
        ? Object.assign({}, { className: element.data.label })
        : {};
    return createElement('span', propsWithUniqueKey(props, key), children);
};

const serializeSpan = (content) => {
    if (content) {
        return content.split('\n').reduce((acc, p) => {
            if (acc.length === 0) {
                return [p];
            } else {
                const brIndex = (acc.length + 1) / 2 - 1;
                const br = createElement('br', propsWithUniqueKey({}, brIndex));
                return acc.concat([br, p]);
            }
        }, []);
    } else {
        return null;
    }
};

const serializeImage = (linkResolver, element, key) => {
    /*const linkUrl = element.linkTo
        ? LinkHelper.url(element.linkTo, linkResolver)
        : null;*/
    /*const linkTarget =
        element.linkTo && element.linkTo.target
            ? { target: element.linkTo.target }
            : {};*/
    /*const relAttr = linkTarget.target ? { rel: 'noopener' } : {};*/
    const imgChild = createElement('img', {
        src: element.url,
        alt: element.alt || '',
    });
    return (
        <Image
            key={key}
            padding="lg"
            imageType="picture"
            blockHeight="auto"
            blockWidth="auto"
        >
            {imgChild}
        </Image>
    );
};

export const asText = (structuredText) =>
    PrismicRichText.asText(structuredText);

export const renderRichText = (
    richText,
    linkResolver,
    htmlSerializer,
    Component = Fragment,
    theme,
    colorType,
    removeP,
    args = {},
) => {
    console.log('linkResolver', linkResolver);
    const colorTheme = theme ? theme : 'primary';
    colorType = colorType ? colorType : 'original';

    if (Object.prototype.toString.call(richText) !== '[object Array]') {
        console.warn(
            `Rich text argument should be an Array. Received ${typeof richtext}`,
        );
        return null;
    }
    const serializedChildren = PrismicRichText.serialize(
        richText,
        serialize.bind(
            null,
            removeP,
            colorType,
            colorTheme,
            linkResolver
        ),
        htmlSerializer,
    );
    return createElement(Component, args, serializedChildren);
};

const createHtmlSerializer = (bucket = {}, serializers = []) => {
    const processors = serializers.reduce((acc, { type, fn }) => {
        return Object.assign({}, acc, { [type]: fn });
    }, {});
    return (type, ...args) =>
        processors[type] ? processors[type](type, ...args) : null;
};

const serializeEmbed = (element, key) => {
    return (
        <InternalGrid
            key={key}
            childrenMarginTop="lg"
            childrenMarginBottom="lg"
            justifyContent="center"
            dangerouslySetInnerHTML={{ __html: element.oembed.html }}
        />
    );
};

const RichText = ({
    Component,
    htmlSerializer,
    linkResolver,
    render,
    renderAsText,
    serializeHyperlink,
    removeP,
    colorTheme,
    colorType,
    ...rest
}) => {
    const maybeSerializer =
        htmlSerializer ||
        (serializeHyperlink &&
            createHtmlSerializer({}, [
                {
                    type: Elements.hyperlink,
                    fn: serializeHyperlink,
                },
            ]));
    return render
        ? renderRichText(
              render,
              linkResolver,
              maybeSerializer,
              Component,
              colorTheme,
              colorType,
              removeP,
              rest,
          )
        : null;
};

RichText.propTypes = {
    Component: node,
    linkResolver: func,
    htmlSerializer: func,
    serializeHyperlink: (props, _, componentName) => {
        if (props.serializeHyperlink && props.htmlSerializer) {
            return new Error(
                `You cannot specify both 'htmlSerializer' and 'serializeHyperlink'. The latter will be ignored by '${componentName}'.`,
            );
        }
    },
    render: (props, _, componentName) => {
        if (!props.render) {
            return new Error(
                `Prop 'render' was not specified in '${componentName}'.`,
            );
        }
    },
};

RichText.asText = asText;
RichText.render = renderRichText;
RichText.displayName = 'RichText';
RichText.removeP = false;

export default RichText;
