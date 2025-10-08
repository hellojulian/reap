# Button Component - Accessibility Documentation

## Overview

The Button component is a fully accessible interactive element that meets WCAG 2.1 AA standards and React Native mobile accessibility requirements. It provides comprehensive support for screen readers, keyboard navigation, and touch interactions.

## Accessibility Features

### ✅ WCAG 2.1 AA Compliance

- **Touch Target Size**: Minimum 48px × 48px for all interactive states
- **Focus Management**: Proper focus indication and keyboard navigation
- **Screen Reader Support**: Comprehensive labels, hints, and state announcements
- **Semantic Markup**: Correct ARIA roles and accessibility properties

### 🔊 Screen Reader Support

The Button component provides rich accessibility information:

```typescript
// Automatic accessibility labels
<Button label="Save Changes" />
// Announces: "Save Changes, button"

// Custom accessibility information
<Button 
  label="Delete Item"
  accessibilityLabel="Delete selected item"
  accessibilityHint="This action cannot be undone"
/>
// Announces: "Delete selected item, button. This action cannot be undone"

// Loading state announcements
<Button label="Submit" loading={true} />
// Announces: "Submit, button. Loading, please wait"
```

### 📱 Mobile Accessibility

- **VoiceOver/TalkBack**: Optimized for iOS and Android screen readers
- **Haptic Feedback**: Tactile response for touch interactions
- **Touch Areas**: Extended hit areas for better usability
- **Dynamic Type**: Respects user font size preferences

## Props Reference

### Accessibility Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `accessibilityLabel` | `string` | `label` | Custom label for screen readers |
| `accessibilityHint` | `string` | Auto-generated | Additional context for screen readers |
| `accessibilityActions` | `Array<{name: string, label: string}>` | `[]` | Custom accessibility actions |
| `hapticFeedback` | `boolean` | `true` | Enable/disable haptic feedback on press |

### Core Props with Accessibility Impact

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `"Button"` | Button text and fallback accessibility label |
| `loading` | `boolean` | `false` | Shows loading state with accessibility announcements |
| `disabled` | `boolean` | `false` | Disables interaction and updates accessibility state |

## Usage Examples

### Basic Accessible Button

```typescript
import { Button } from './components/ui/button';

<Button 
  label="Save Document"
  onPress={() => saveDocument()}
/>
```

**Accessibility Output:**
- Role: `button`
- Label: "Save Document"
- State: Normal
- Touch Target: 48px minimum

### Loading State Button

```typescript
<Button 
  label="Processing"
  loading={true}
  onPress={() => {}}
/>
```

**Accessibility Output:**
- Role: `button`
- Label: "Processing"
- State: `busy: true`
- Hint: "Loading, please wait"
- Haptic: Disabled during loading

### Disabled Button

```typescript
<Button 
  label="Submit Form"
  disabled={true}
  onPress={() => submitForm()}
/>
```

**Accessibility Output:**
- Role: `button`
- Label: "Submit Form"
- State: `disabled: true`
- Interaction: Blocked

### Custom Accessibility

```typescript
<Button 
  label="🗑️"
  accessibilityLabel="Delete selected items"
  accessibilityHint="This will permanently remove 3 selected items"
  accessibilityActions={[
    { name: 'delete', label: 'Delete items' },
    { name: 'cancel', label: 'Cancel deletion' }
  ]}
  onPress={() => deleteItems()}
/>
```

**Accessibility Output:**
- Role: `button`
- Label: "Delete selected items"
- Hint: "This will permanently remove 3 selected items"
- Actions: Delete items, Cancel deletion

### No Haptic Feedback

```typescript
<Button 
  label="Quiet Action"
  hapticFeedback={false}
  onPress={() => silentAction()}
/>
```

## Touch Target Guidelines

The Button component automatically ensures accessible touch targets:

### Minimum Sizes
- **Default**: 48px × 48px minimum
- **Large**: 48px × 48px minimum (expanded padding)
- **Hit Slop**: Additional 10px on all sides

### Implementation
```typescript
// Automatic touch target enforcement
style={{
  minHeight: 48,
  minWidth: 48,
  paddingHorizontal: size === 'large' ? 32 : 16,
  paddingVertical: 8,
}}
hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
```

## Screen Reader Behavior

### Focus Navigation
- **VoiceOver (iOS)**: Swipe right/left to navigate between buttons
- **TalkBack (Android)**: Swipe right/left or use explore by touch
- **External Keyboard**: Tab/Shift+Tab navigation

### Activation Methods
- **Touch**: Single tap or double-tap for VoiceOver
- **Keyboard**: Space bar or Enter key
- **Voice Control**: "Tap [button label]"

### State Announcements

| State | Announcement |
|-------|-------------|
| Normal | "[Label], button" |
| Loading | "[Label], button. Loading, please wait" |
| Disabled | "[Label], button, dimmed" |
| Pressed | "[Label], button, selected" |

## Haptic Feedback

The Button component provides tactile feedback for enhanced accessibility:

### When Triggered
- ✅ Normal button press
- ✅ Accessibility activation (VoiceOver double-tap)
- ❌ Loading state (disabled)
- ❌ Disabled state

### Customization
```typescript
// Enable haptic feedback (default)
<Button hapticFeedback={true} />

// Disable haptic feedback
<Button hapticFeedback={false} />
```

### Vibration Pattern
- **Duration**: 50ms
- **Type**: Light impact feedback
- **Platform**: iOS and Android

## Testing Accessibility

### Manual Testing Checklist

#### Screen Reader Testing
- [ ] Turn on VoiceOver (iOS) or TalkBack (Android)
- [ ] Navigate to button using swipe gestures
- [ ] Verify button label is announced clearly
- [ ] Verify button role is announced as "button"
- [ ] Test activation with double-tap
- [ ] Verify loading/disabled states are announced

#### Touch Target Testing
- [ ] Verify button is easily tappable
- [ ] Test with finger sizes (small to large)
- [ ] Verify hit area extends beyond visual boundaries
- [ ] Test haptic feedback activation

#### Keyboard Testing (External Keyboard)
- [ ] Navigate to button using Tab key
- [ ] Verify focus indication is visible
- [ ] Activate button using Space or Enter
- [ ] Verify focus moves appropriately after activation

### Automated Testing

```typescript
import { render } from '@testing-library/react-native';
import { Button } from './button';

describe('Button Accessibility', () => {
  it('has correct accessibility role', () => {
    const { getByRole } = render(<Button label="Test" />);
    expect(getByRole('button')).toBeTruthy();
  });

  it('has correct accessibility label', () => {
    const { getByLabelText } = render(
      <Button label="Save" accessibilityLabel="Save document" />
    );
    expect(getByLabelText('Save document')).toBeTruthy();
  });

  it('announces loading state', () => {
    const { getByHintText } = render(
      <Button label="Submit" loading={true} />
    );
    expect(getByHintText('Loading, please wait')).toBeTruthy();
  });
});
```

## Common Accessibility Issues

### ❌ Anti-Patterns to Avoid

```typescript
// DON'T: Use emoji without proper labels
<Button label="🔄" /> // Screen reader says "clockwise arrows"

// DON'T: Disable haptic feedback unnecessarily
<Button hapticFeedback={false} /> // Reduces accessibility

// DON'T: Use vague labels
<Button label="Click here" /> // Not descriptive

// DON'T: Forget loading states
<Button onPress={asyncAction} /> // No loading feedback
```

### ✅ Best Practices

```typescript
// DO: Use descriptive labels
<Button 
  label="🔄"
  accessibilityLabel="Refresh data"
/>

// DO: Provide context in hints
<Button 
  label="Delete"
  accessibilityHint="This will permanently remove the selected item"
/>

// DO: Handle loading states
<Button 
  label="Save"
  loading={isLoading}
  onPress={handleSave}
/>

// DO: Use semantic variants appropriately
<Button 
  variant="primary"    // For primary actions
  variant="secondary"  // For secondary actions
  style="link"        // For less prominent actions
/>
```

## Platform-Specific Considerations

### iOS (VoiceOver)
- Supports custom accessibility actions
- Haptic feedback works with Taptic Engine
- Respects "Button Shapes" accessibility setting
- Supports Voice Control

### Android (TalkBack)
- Supports explore by touch
- Haptic feedback works with device vibration
- Respects "High contrast text" setting
- Supports Select to Speak

## Version Compatibility

- **React Native**: ≥ 0.64
- **iOS**: ≥ 11.0 (VoiceOver support)
- **Android**: ≥ API 21 (TalkBack support)
- **WCAG**: 2.1 AA compliant

## Resources

### Official Guidelines
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Apple Human Interface Guidelines - Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility/)
- [Android Accessibility Guidelines](https://developer.android.com/guide/topics/ui/accessibility)

### React Native Documentation
- [React Native Accessibility](https://reactnative.dev/docs/accessibility)
- [Accessibility Props](https://reactnative.dev/docs/accessibility#accessibility-properties)

### Testing Tools
- [Accessibility Inspector (iOS)](https://developer.apple.com/library/archive/documentation/Accessibility/Conceptual/AccessibilityMacOSX/OSXAXTestingApps.html)
- [Accessibility Scanner (Android)](https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.auditor)