// Quote.js
import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'
import styles from './Quote.module.css'

const builder = imageUrlBuilder(client)

function Quote ({name, photo, quote}) {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <figure className={styles.figure}>
          <img
            src={builder
              .image(photo)
              .auto('format')
              .width(200)
              .height(200)
              .url()}
            alt={photo.alt}
            className={styles.photo}
          />
        </figure>
        <blockquote className={styles.quote}>{quote}
          {name && <footer>
            <cite id='baseref'>{name}</cite>
          </footer>}
        </blockquote>
      </div>
    </div>
  )
}

export default Quote

Quote.propTypes = {
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.object,
  quote: PropTypes.string.isRequired
}
