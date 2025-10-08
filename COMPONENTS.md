# Component Library Documentation

## Overview

This document provides comprehensive documentation for the custom UI components in the project. All components are built with React Native, NativeWind, and follow WCAG 2.1 AA accessibility standards.

## Design System

- **Font Family**: Plus Jakarta Sans
- **Color Palette**: Zinc-based with custom brand colors
- **Spacing**: Consistent 4px/8px/16px grid system
- **Border Radius**: 12px (xl) and 9999px (full) variants
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels and roles

---

## Components

### Text

**Location**: `components/ui/text.tsx`

A foundational text component with multiple variants and sizes.

#### Props

```typescript
interface TextProps extends RNTextProps, VariantProps<typeof textVariants> {
  className?: string;
}
```

#### Variants

- `label`: 20px, semibold, -0.5px tracking (zinc-950)
- `description`: 16px, regular (zinc-500)
- `header`: 24px, semibold, -0.6px tracking (zinc-950)
- `button`: 14px, medium (for button labels)
- `default`: Base foreground color, bold
- `muted`: Muted foreground, normal weight
- `destructive`: Destructive color
- `accent`: Accent foreground
- `secondary`: Secondary foreground
- `primary`: Primary color
- `brand`: Brand color

#### Accessibility Features

- Inherits native React Native Text accessibility
- Proper semantic text rendering
- Screen reader compatible

#### Usage

```tsx
<Text variant="header" size="header">Page Title</Text>
<Text variant="description" size="description">Subtitle text</Text>
<Text variant="label" size="label">Form Label</Text>
```

---

### TextGroup

**Location**: `components/ui/text-group.tsx`

A composite component that combines label and description text in vertical or horizontal layouts.

#### Props

```typescript
interface TextGroupProps extends ViewProps, VariantProps<typeof textGroupVariants> {
  className?: string;
  label?: string;
  description?: string;
  hasLabel?: boolean;
  hasDescription?: boolean;
}
```

#### Variants

- `vertical`: Stacked layout (label above description)
- `horizontal`: Side-by-side layout with spacing

#### Accessibility Features

- `accessibilityRole="text"`
- Combined label and description for screen readers
- Customizable accessibility labels

#### Usage

```tsx
<TextGroup 
  variant="vertical" 
  label="Costa Coffee" 
  description="Physical Store" 
/>

<TextGroup 
  variant="horizontal" 
  label="$10.00" 
  description="USD" 
/>
```

---

### TextHeader

**Location**: `components/ui/text-header.tsx`

A header component with optional trailing icon for page titles and navigation headers.

#### Props

```typescript
interface TextHeaderProps extends ViewProps, VariantProps<typeof textHeaderVariants> {
  className?: string;
  title?: string;
  hasIcon?: boolean;
  iconUri?: string;
  children?: React.ReactNode;
}
```

#### Accessibility Features

- `accessibilityRole="header"`
- Semantic header identification
- Icon accessibility support

#### Usage

```tsx
<TextHeader title="Dashboard" />
<TextHeader 
  title="Settings" 
  hasIcon={true} 
  iconUri="settings-icon-uri"
/>
```

---

### IconGroup

**Location**: `components/ui/icon-group.tsx`

A circular icon container with color-coded backgrounds for categorization.

#### Props

```typescript
interface IconGroupProps extends ViewProps, VariantProps<typeof iconGroupVariants> {
  className?: string;
  iconUri?: string;
  children?: React.ReactNode;
}
```

#### Variants

- `red`: Red background (#ffe8e4)
- `blue`: Blue background (#e0f2fe)
- `green`: Green background (#d1fae5)

#### Accessibility Features

- `accessibilityRole="image"`
- Descriptive icon labels
- Customizable accessibility descriptions

#### Usage

```tsx
<IconGroup variant="red" iconUri="coffee-icon-uri" />
<IconGroup variant="blue">
  <CustomIcon />
</IconGroup>
```

---

### Button

**Location**: `components/ui/button.tsx`

A comprehensive button component with multiple variants, states, and icon support.

#### Props

```typescript
interface ButtonProps extends PressableProps, VariantProps<typeof buttonVariants> {
  className?: string;
  children?: React.ReactNode;
  label?: string;
  showLabel?: boolean;
  showLeadingIcon?: boolean;
  showTrailingIcon?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  leadingIconUri?: string;
  trailingIconUri?: string;
  loading?: boolean;
}
```

#### Variants

- `primary`: Brand teal background (#1fe2d9)
- `secondary`: Light gray background (#f4f4f5) with border
- `destructive`: Red background (#ef4444)
- `link`: Transparent background

#### States

- `default`: Normal interactive state
- `hover`: Hover feedback (lighter backgrounds)
- `disabled`: 50% opacity, non-interactive
- `loading`: Shows spinner, non-interactive

#### Accessibility Features

- `accessibilityRole="button"`
- Loading and disabled state announcements
- Custom accessibility labels and hints
- Proper focus management

#### Usage

```tsx
<Button variant="primary" label="Save Changes" />
<Button variant="destructive" label="Delete" loading={true} />
<Button 
  variant="secondary" 
  showLeadingIcon 
  leadingIcon={<SaveIcon />}
  label="Save Draft"
/>
```

---

### ListItem

**Location**: `components/ui/list-item.tsx`

A list item component combining icon, text content, and trailing information for transactions and data lists.

#### Props

```typescript
interface ListItemProps extends ViewProps, VariantProps<typeof listItemVariants> {
  className?: string;
  iconVariant?: 'red' | 'blue' | 'green';
  iconUri?: string;
  iconChildren?: React.ReactNode;
  title?: string;
  subtitle?: string;
  amount?: string;
  currency?: string;
  rightLabel?: string;
  rightDescription?: string;
}
```

#### Accessibility Features

- `accessibilityRole="button"`
- Combined content description for screen readers
- Structured information hierarchy

#### Usage

```tsx
<ListItem 
  iconVariant="red"
  title="Costa Coffee"
  subtitle="Physical Store"
  amount="$10.00"
  currency="USD"
/>

<ListItem 
  iconVariant="green"
  title="Transfer Complete"
  subtitle="Bank Transfer"
  rightLabel="Success"
  rightDescription="Completed"
/>
```

---

### Card

**Location**: `components/ui/card.tsx`

A credit/debit card component with background image support and comprehensive card information display.

#### Props

```typescript
interface CardProps extends ViewProps, VariantProps<typeof cardVariants> {
  className?: string;
  backgroundImage?: any;
  brand?: string;
  cardType?: string;
  cardNumber?: string;
  showCardNumber?: boolean;
  amount?: string;
  currency?: string;
  availableLabel?: string;
  paymentNetwork?: string;
  children?: React.ReactNode;
}
```

#### Sizes

- `default`: 320px × 192px (standard card ratio)
- `large`: 384px × 240px

#### Accessibility Features

- `accessibilityRole="image"`
- Comprehensive card information for screen readers
- Secure handling of sensitive information display

#### Usage

```tsx
<Card 
  brand="REAP"
  cardType="Physical"
  cardNumber="•••• 4567"
  amount="$24,000.00"
  currency="HKD"
  paymentNetwork="VISA Platinum Business"
/>

<Card 
  size="large"
  backgroundImage={customCardBackground}
  showCardNumber={false}
/>
```

---

## Accessibility Standards

All components in this library meet WCAG 2.1 AA standards:

### Level A Requirements ✅
- Proper semantic roles and properties
- Keyboard navigation support
- Screen reader compatibility
- Color contrast ratios

### Level AA Requirements ✅
- Enhanced color contrast (4.5:1 for normal text, 3:1 for large text)
- Meaningful focus indicators
- Descriptive labels and instructions
- Error identification and suggestions

### Best Practices Implemented

1. **Semantic HTML/React Native Elements**: Proper `accessibilityRole` for all interactive elements
2. **Keyboard Navigation**: Full keyboard support via React Native's accessibility system
3. **Screen Reader Support**: Comprehensive `accessibilityLabel` and `accessibilityHint` properties
4. **Color Independence**: Information not conveyed through color alone
5. **Focus Management**: Proper focus indicators and tab order
6. **Loading States**: Clear indication of loading and disabled states
7. **Error Handling**: Accessible error messages and validation feedback

### Testing Recommendations

1. **Screen Reader Testing**: Test with iOS VoiceOver and Android TalkBack
2. **Keyboard Navigation**: Verify all interactive elements are keyboard accessible
3. **Color Contrast**: Use tools like WebAIM's contrast checker
4. **Focus Indicators**: Ensure focus is visible and logical
5. **State Announcements**: Verify loading, error, and success states are announced

---

## Development Guidelines

### Adding New Components

1. **Accessibility First**: Include accessibility props from the start
2. **Consistent API**: Follow the established prop patterns
3. **Documentation**: Update this file with new component documentation
4. **Testing**: Verify accessibility compliance before submission

### Customization

All components support:
- Custom `className` for styling overrides
- Flexible `children` prop for custom content
- Accessibility customization via standard React Native props
- TypeScript for type safety

### Performance Considerations

- Components use `React.forwardRef` for ref forwarding
- Memoization is applied where beneficial
- Images are optimized and cached appropriately
- SVG icons are preferred for scalability

---

## File Structure

```
components/ui/
├── text.tsx           # Base text component
├── text-group.tsx     # Composite text layouts
├── text-header.tsx    # Page headers with icons
├── icon-group.tsx     # Categorized icon containers
├── button.tsx         # Interactive buttons
├── list-item.tsx      # List/transaction items
└── card.tsx           # Credit/debit card display
```

---

## Dependencies

- **React Native**: Core framework
- **class-variance-authority**: Variant-based styling
- **react-native-svg**: SVG icon support
- **tailwind-merge**: Style utility merging
- **clsx**: Conditional className utilities

---

## Contributing

When contributing to this component library:

1. Follow the established patterns and conventions
2. Ensure WCAG 2.1 AA compliance
3. Add comprehensive documentation
4. Include usage examples
5. Test with accessibility tools
6. Update this documentation file

For questions or suggestions, please refer to the project's contribution guidelines.