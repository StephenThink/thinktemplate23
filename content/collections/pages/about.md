---
id: 288ed25c-b9a4-428f-a86c-3d2c4c8cbfb7
blueprint: page
title: About
updated_by: 3bad7517-f4ca-4897-8d03-b872574d46f2
updated_at: 1675762474
template: pages/about
hero_activated: true
image_or_colour: colour
hero_size: h-screen
background_colour: primary
dark_background_colour: secondary
display_which: heading
text_colour: secondary
dark_text_colour: primary
heading: 'About Page'
page_content:
  -
    type: heading
    attrs:
      level: 2
    content:
      -
        type: text
        text: 'Heading 1'
  -
    type: paragraph
    content:
      -
        type: text
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet fringilla quam, in scelerisque erat. Aenean felis nisl, tempus quis vestibulum eget, malesuada sit amet nisi. Vestibulum quis eleifend elit, ac blandit tellus. Vivamus tristique a ipsum ac pharetra. Aliquam justo felis, vulputate vel scelerisque eu, fermentum eu purus. Quisque at mattis lectus. Proin et leo non nunc rutrum interdum vitae eu erat. Nam tempor purus posuere convallis cursus.'
  -
    type: set
    attrs:
      id: ldu13w0q
      values:
        type: call_to_action
        call_to_action:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Just a message from our Sponsor'
        alignment: center
        box_width: three-quarters
        background_colour: primary
        dark_background_colour: secondary
  -
    type: paragraph
  -
    type: set
    attrs:
      id: ldinlchz
      enabled: false
      values:
        type: full_width_image
        image: example/ironman-light.jpg
        heading: 'I am Iron Man'
        content: 'Anthony Edward Stark, Or Tony Stark for short is known as Iron Man. Tony is a billionaire, genius, former playboy, philantropist and is also well-known as famous superhero Iron Man, owns Stark Industries - formerly acting as its CEO - lives in his house in Malibu, and is one of the founding and lead members of The Avengers. '
        text_position: middle-center
        text_readability: gradient
        text_width: three-quarters
        header_position: center
        content_position: center
        gradient_direction: bottom
        gradient_colour: black
  -
    type: heading
    attrs:
      level: 2
    content:
      -
        type: text
        text: 'Heading 2'
  -
    type: paragraph
    content:
      -
        type: text
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet fringilla quam, in scelerisque erat. Aenean felis nisl, tempus quis vestibulum eget, malesuada sit amet nisi. Vestibulum quis eleifend elit, ac blandit tellus. Vivamus tristique a ipsum ac pharetra. Aliquam justo felis, vulputate vel scelerisque eu, fermentum eu purus. Quisque at mattis lectus. Proin et leo non nunc rutrum interdum vitae eu erat. Nam tempor purus posuere convallis cursus.'
  -
    type: set
    attrs:
      id: ldinnvn0
      values:
        type: text_and_image
        header: 'Pepper Potts'
        content: "Pepper was formerly Tony's assistant until they started a relationship. Tony found a love for Pepper, since she was one of the few people in his life. Over the course of the film franchise, the relationship between Tony and Pepper grew but were sometimes strained because of some of the actions Tony did being Iron Man. In Iron Man 3, Pepper finally becomes Tony's girlfriend and she moves in with Tony in his house. Prior to the events of Captain America: Civil War, however, they broke up due to Tony's obsession with his Iron Man persona. They would eventually reconcile prior to the end of Spider-Man: Homecoming, with Tony proposing (off-screen) during a press conference, and they later married and had a daughter, Morgan, during the events of Avengers: Endgame. "
        image: example/pepper-potts.webp
        image_position: left
        safe_truncate: 300
  -
    type: set
    attrs:
      id: ldinrdgr
      values:
        type: text_and_image
        header: 'Howard Stark'
        content: "Tony's relationship with his father was cold and strained. Tony did not talk much with his father, as he was busy and always working. Howard was presumed to have never spent any time with his son and always made sure that Tony stayed away from his work. Tony would describe his father as \"cold and calculating\" and that he never said he loved him, and he never said he cared about him. Tony later discovered a video in which his father had admitted to loving him greatly and left him a clue to a new element derived from the Space Stone which managed to save Tony's life. Following this, Tony's opinion of his father improved somewhat, to the point that, when he went back in time to 1970 and ended up accidentally bumping into Howard during his mission, he hugged and thanked the man. "
        image: example/Howard_Stark.webp
        image_position: right
  -
    type: heading
    attrs:
      level: 2
    content:
      -
        type: text
        text: 'Heading 3'
  -
    type: paragraph
    content:
      -
        type: text
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet fringilla quam, in scelerisque erat. Aenean felis nisl, tempus quis vestibulum eget, malesuada sit amet nisi. Vestibulum quis eleifend elit, ac blandit tellus. Vivamus tristique a ipsum ac pharetra. Aliquam justo felis, vulputate vel scelerisque eu, fermentum eu purus. Quisque at mattis lectus. Proin et leo non nunc rutrum interdum vitae eu erat. Nam tempor purus posuere convallis cursus.'
  -
    type: set
    attrs:
      id: ldinuzah
      enabled: false
      values:
        type: quote
        quote: '<p>I am Iron Man.</p>'
        author: 'Tony Stark'
  -
    type: set
    attrs:
      id: ldkeb2do
      enabled: false
      values:
        type: gallery
        gallery_images:
          - example/iron1.webp
          - example/iron2.png
          - example/iron3.webp
          - example/iron4.jpg
        phone_columns: 1
        tablets_columns: 2
        desktop_columns: 4
        tablet_columns: 2
  -
    type: set
    attrs:
      id: ldkg66c9
      values:
        type: slider
        slider_images:
          - example/iron1.webp
          - example/iron2.png
          - example/iron3.webp
          - example/iron4.jpg
          - example/390005-4k-anime-wallpaper-3840x2160-phone.jpeg
  -
    type: set
    attrs:
      id: ldolj9x4
      enabled: false
      values:
        type: flip_cards
        flip_cards:
          -
            id: ldoljb0l
            show_front_heading: true
            show_front_content: true
            show_front_image: true
            front_heading: 'Front Heading'
            front_content: 'Front Content'
            front_image: pageContent/fullWidth/ironman-light.jpg
            show_back_heading: true
            show_back_content: true
            show_back_image: true
            back_heading: 'Back Heading'
            back_content: "Back Content\t\t"
            back_image: pageContent/fullWidth/ironman.jpeg
            type: card
            enabled: true
            front_text_position: center
            back_text_position: topBottom
          -
            id: ldon89qi
            show_front_heading: true
            show_front_content: true
            show_front_image: false
            front_heading: 'Front Heading 2'
            front_content: 'Front Content 2'
            front_image: example/ironman-light.jpg
            show_back_heading: true
            show_back_content: true
            show_back_image: false
            back_heading: 'Back Heading 2'
            back_content: 'Back Content 2'
            back_image: example/ironman.jpeg
            type: card
            enabled: true
            front_text_position: center
            back_text_position: topBottom
          -
            id: ldoothdr
            show_front_heading: true
            show_front_content: true
            show_front_image: false
            front_heading: 'Front Heading 2'
            front_content: 'Front Content 2'
            front_image: example/ironman-light.jpg
            show_back_heading: true
            show_back_content: true
            show_back_image: false
            back_heading: 'Back Heading 2'
            back_content: 'Back Content 2'
            back_image: example/ironman.jpeg
            type: card
            enabled: true
            front_text_position: center
            back_text_position: topBottom
  -
    type: set
    attrs:
      id: ldoq2zl8
      enabled: false
      values:
        type: fading_image
        fading_image:
          -
            id: ldoq30ny
            image: example/ironman-light.jpg
            image_title: 'Iron Man'
            content:
              -
                type: heading
                attrs:
                  level: 2
                content:
                  -
                    type: text
                    text: 'Iron Man'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'This is Tony Stark, This is Tony Stark, This is Tony Stark, This is Tony Stark, This is Tony Stark, This is Tony Stark, This is Tony Stark, This is Tony Stark, This is Tony Stark, This is Tony Stark, This is Tony Stark, This is Tony Stark, This is Tony Stark, This is Tony Stark, This is Tony Stark, This is Tony Stark, This is Tony Stark, This is Tony Stark, This is Tony Stark, This is Tony Stark, This is Tony Stark, This is Tony Stark, This is Tony Stark, This is Tony Stark, This is Tony Stark, This is Tony Stark, This is Tony Stark, This is Tony Stark, This is Tony Stark, '
            type: card
            enabled: true
  -
    type: set
    attrs:
      id: ldor3qqw
      enabled: false
      values:
        type: reduce_image
        reduce_image:
          -
            id: ldor3rno
            image: example/ironman.jpeg
            tag: Marvel
            content:
              -
                type: heading
                attrs:
                  level: 2
                content:
                  -
                    type: text
                    text: 'This is Iron man'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Anthony Edward Stark, Or Tony Stark for short is known as Iron Man. Tony is a billionaire, genius, former playboy, philantropist and is also well-known as famous superhero Iron Man, owns Stark Industries - formerly acting as its CEO - lives in his house in Malibu, and is one of the founding and lead members of The Avengers. '
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Anthony Edward Stark, Or Tony Stark for short is known as Iron Man. Tony is a billionaire, genius, former playboy, philantropist and is also well-known as famous superhero Iron Man, owns Stark Industries - formerly acting as its CEO - lives in his house in Malibu, and is one of the founding and lead members of The Avengers. '
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Anthony Edward Stark, Or Tony Stark for short is known as Iron Man. Tony is a billionaire, genius, former playboy, philantropist and is also well-known as famous superhero Iron Man, owns Stark Industries - formerly acting as its CEO - lives in his house in Malibu, and is one of the founding and lead members of The Avengers. '
            type: card
            enabled: true
          -
            id: ldsuxcz1
            image: example/ironman.jpeg
            tag: Marvel
            content:
              -
                type: heading
                attrs:
                  level: 2
                content:
                  -
                    type: text
                    text: 'This is Iron man'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Anthony Edward Stark, Or Tony Stark for short is known as Iron Man. Tony is a billionaire, genius, former playboy, philantropist and is also well-known as famous superhero Iron Man, owns Stark Industries - formerly acting as its CEO - lives in his house in Malibu, and is one of the founding and lead members of The Avengers. '
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Anthony Edward Stark, Or Tony Stark for short is known as Iron Man. Tony is a billionaire, genius, former playboy, philantropist and is also well-known as famous superhero Iron Man, owns Stark Industries - formerly acting as its CEO - lives in his house in Malibu, and is one of the founding and lead members of The Avengers. '
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Anthony Edward Stark, Or Tony Stark for short is known as Iron Man. Tony is a billionaire, genius, former playboy, philantropist and is also well-known as famous superhero Iron Man, owns Stark Industries - formerly acting as its CEO - lives in his house in Malibu, and is one of the founding and lead members of The Avengers. '
            type: card
            enabled: true
          -
            id: ldsux6qp
            image: example/ironman.jpeg
            tag: Marvel
            content:
              -
                type: heading
                attrs:
                  level: 2
                content:
                  -
                    type: text
                    text: 'This is Iron man'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Anthony Edward Stark, Or Tony Stark for short is known as Iron Man. Tony is a billionaire, genius, former playboy, philantropist and is also well-known as famous superhero Iron Man, owns Stark Industries - formerly acting as its CEO - lives in his house in Malibu, and is one of the founding and lead members of The Avengers. '
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Anthony Edward Stark, Or Tony Stark for short is known as Iron Man. Tony is a billionaire, genius, former playboy, philantropist and is also well-known as famous superhero Iron Man, owns Stark Industries - formerly acting as its CEO - lives in his house in Malibu, and is one of the founding and lead members of The Avengers. '
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Anthony Edward Stark, Or Tony Stark for short is known as Iron Man. Tony is a billionaire, genius, former playboy, philantropist and is also well-known as famous superhero Iron Man, owns Stark Industries - formerly acting as its CEO - lives in his house in Malibu, and is one of the founding and lead members of The Avengers. '
            type: card
            enabled: false
sub_heading: 'Look at all this content'
---
