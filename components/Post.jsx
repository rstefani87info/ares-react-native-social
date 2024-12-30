import React from 'react';
import {Text,View} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import i18n from '@ares/react-native-ui/locales/i18n';
import SlideShow from '@ares/react-native-ui/components/output/media/SlideShow';
import { useNavigation } from '@react-navigation/native';

Post.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.date.isRequired,
    author: PropTypes.string.isRequired,
    media: PropTypes.arrayOf(PropTypes.oneOfType(PropTypes.shape(
        {
            url: PropTypes.string.isRequired,
            title: PropTypes.string,
            description: PropTypes.string,
            tags: PropTypes.arrayOf(PropTypes.string),
        }
    ),PropTypes.string)).isRequired,
    link: PropTypes.oneOfType(PropTypes.shape(
        {
            url: PropTypes.string.isRequired,
            title: PropTypes.string,
            description: PropTypes.string,
            tags: PropTypes.arrayOf(PropTypes.string),
        }
    ),PropTypes.string).isRequired,
    reactions: PropTypes.arrayOf(
        PropTypes.oneOfType(PropTypes.shape(
            {
                author: PropTypes.string.isRequired,
                description: PropTypes.string,
                vote: PropTypes.arrayOf(PropTypes.string),
            }
        ))
    ).isRequired,
    reviews: PropTypes.arrayOf(
        PropTypes.oneOfType(PropTypes.shape(
            {
                author: PropTypes.string.isRequired,
                description: PropTypes.string,
                vote: PropTypes.float.isRequired,
            }
        ))
    ).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    style: PropTypes.shapeOf({
        author:PropTypes.object,
        content:PropTypes.object,
        date:PropTypes.object,
        title:PropTypes.object,
        media:PropTypes.object,
        reactions:PropTypes.object,
        reviews:PropTypes.object,
        tags:PropTypes.object,
    }),
    template: PropTypes.func,
    reactionsEnabled: PropTypes.bool,
    reviewsEnabled: PropTypes.bool,
    mentions: PropTypes.arrayOf(PropTypes.string),
    links: PropTypes.arrayOf(PropTypes.oneOfType(PropTypes.shape(
        {
            url: PropTypes.string.isRequired,
            title: PropTypes.string,
            description: PropTypes.string,
            tags: PropTypes.arrayOf(PropTypes.string),
        }
    ), PropTypes.string)),

};
 
export default function Post({author, content, date, title, media, links, reactions, reactionsEnabled, reviews, reviewsEnabled, tags, mentions, style, template, ...props}) {
    template = template ?? DefaultTemplate;
    const navigation = useNavigation();

    const handleAvatarPress=()=>{
        navigation.navigate('ViewProfile', { userId });
    };

    const resolvedAuthor = ( <Avatar style={style?.author} viewName={author.viewName} onPress={handleAvatarPress}/>);
    const resolvedContent = ( <Text style={style?.content}>{content}</Text> );
    const resolvedDate = ( <Text style={style?.date}>{moment(date).format(i18n.translate)}</Text> );
    const resolvedTitle = ( <Text style={style?.title}>{title}</Text> );
    const resolvedMedia = ( <SlideShow style={style?.media}>{media}</SlideShow> );
    const resolvedReactions = (<Text style={style?.reactions}>{reactions}</Text> );
    const resolvedReviews = reviews;
    const resolvedTags = ( <Text style={style?.tags}>{tags}</Text> );
    const resolvedMentions = mentions.map(m=><Text style={style?.mentions.mention}>{m}</Text>);
    const resolvedLinks = mentions.map(m=><Text style={style?.mentions.mention}>{m}</Text>);
    return template({
        author: resolvedAuthor,
        content: resolvedContent,
        date: resolvedDate,
        title: resolvedTitle,
        media: resolvedMedia,
        reactions: resolvedReactions,
        reviews: resolvedReviews,
        tags: resolvedTags,
        mentions: resolvedMentions,
        props,
    });
}

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function DefaultTemplate({ 
    author, 
    title, 
    content, 
    date, 
    media, 
    reactions, 
    reviews, 
    tags, 
    mentions,
    style, 
    ...props 
}) {
    return (
        <View style={{...styles.wrapper, ...style.wrapper}} {...props}>
            <View style={{...styles.header, ...style.header}}>
                {author}
                {date}
            </View>
            
            <View style={{...styles.mentionsContainer, ...style.mentionsContainer}}>
                {mentions}
            </View>

            {title}
            
            {content}

            <View style={{...styles.tagsContainer, ...style.tagsContainer}}>
                {tags}
            </View>

            <View style={{...styles.mediaContainer, ...style.mediaContainer}}>
                {media}
            </View>

            <View style={{...styles.footer, ...style.footer}}>
                {reactions}
                {reviews}
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 16,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        margin: 8,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    author: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#333',
    },
    date: {
        fontSize: 14,
        color: '#777',
    },
    mentionsContainer: {
        marginVertical: 4,
    },
    mentions: {
        fontStyle: 'italic',
        color: '#555',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#000',
        marginVertical: 8,
    },
    content: {
        fontSize: 16,
        color: '#444',
        lineHeight: 22,
        marginVertical: 8,
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 8,
    },
    tags: {
        fontSize: 14,
        color: '#007BFF',
        marginRight: 8,
        marginBottom: 4,
    },
    mediaContainer: {
        marginVertical: 12,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 12,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        paddingTop: 8,
    },
    reactions: {
        fontSize: 14,
        color: '#28a745',
    },
    reviews: {
        fontSize: 14,
        color: '#dc3545',
    },
});

