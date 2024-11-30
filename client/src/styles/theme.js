const theme = {
  // Colors
  colors: {
    // Primary CTA Colors (Adjust to match the design's primary actions)
    primaryCta: 'hsl(210, 60%, 50%)', // Slightly brighter primary CTA
    primaryCtaDarker: 'hsl(210, 60%, 40%)', // Darker shade for hover or active state
    secondaryCta: 'hsl(180, 50%, 60%)', // Secondary CTA (adjusted to cool tones)
    secondaryCtaDarker: 'hsl(180, 50%, 50%)',
    secondaryCtaDarkest: 'hsl(180, 50%, 40%)',
    
    // Backgrounds (adjusted to match a lighter or darker palette)
    darkBg: 'hsl(220, 20%, 30%)', // Dark background for footer, nav, or sections
    lightBg: 'hsl(220, 20%, 90%)', // Light background for cards or content sections
    lightestBg: 'hsl(220, 20%, 95%)', // Very light background for text areas
    
    // Font Colors (adjusted to be more readable or fit with the design)
    fontColorLight: 'hsl(40, 100%, 97%)', // Lighter font color for light background
    fontColorDark: 'hsl(220, 15%, 20%)', // Dark font color for main text
    fontColorDarkLighter: 'hsl(220, 15%, 40%)', // Slightly lighter for secondary text
    
    // Other Colors
    playingCardBg: 'hsl(50, 50%, 85%)', // Adjusted to match playing card style
    playingCardBgLighter: 'hsl(50, 50%, 90%)', 
    goldenColorDarker: 'hsl(40, 50%, 45%)', // Slightly darker golden shade
    goldenColor: 'hsl(40, 50%, 55%)', // For highlights or callouts
    dangerColorLighter: 'hsl(0, 100%, 70%)', // Adjusted for a warning effect
    dangerColor: 'hsl(0, 100%, 50%)', // Adjusted danger color for alerts
    buttonFColor: '#ffffff', // White text on buttons
    buttonSColor: '#0b3d3d', // Darker button background color
    borderFColor: '#21a68e', // Border color for input fields or borders
    borderSColor: '#147d6d', // Darker border for hover state
  },
  // Fonts
  fonts: {
    fontFamilySerif: "'Merriweather', serif", // Serif font for a more elegant style
    fontFamilySansSerif: "'Open Sans', sans-serif", // Sans-serif for general text
    fontSizeRoot: '1em', // Base size for root element
    fontSizeRootMobile: '0.9em', // Adjusted font size for mobile screens
    fontSizeH1: 'calc(1.5rem + 4vmin)', // Larger size for h1 to make it prominent
    fontSizeH2: 'calc(1.25rem + 3.5vmin)', // Slightly smaller h2
    fontSizeH3: 'calc(1.25rem + 3vmin)',
    fontSizeH4: 'calc(1.25rem + 2vmin)',
    fontSizeH5: 'calc(1.25rem + 1.5vmin)',
    fontSizeH6: 'calc(1.25rem + 1vmin)', // Ensuring relative scaling for smaller screens
    fontSizeParagraph: '1.2rem', // Standard paragraph size
  },
  // Other styles
  other: {
    // Border-radius for rounded elements
    stdBorderRadius: '1.5rem', // A bit more subtle rounding than the original
    
    // Drop Shadows (Softer for cards and UI elements)
    cardDropShadow: '8px 8px 20px rgba(0, 0, 0, 0.15)', // Slightly softer shadow
    navMenuDropShadow: '-5px 0px 20px rgba(0, 0, 0, 0.1)', // Shadow on the nav menu
  },
};

export default theme;
