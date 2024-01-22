import { styled } from '@mui/system';
import React, { ComponentType, ReactNode } from 'react';
import { FallbackProps, ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { Box } from '../../base/Box';
import { Link } from '../../base/Link';
import { Typography } from '../../base/Typography';
import { BLACK, KEPPEL } from '../../theme/colors';

const ErrorMessage = styled(Typography)(() => ({
  color: BLACK,
  fontWeight: 'normal',
  marginTop: '2px',
  marginBottom: '2px',
  fontSize: '1.15rem'
}));

const StyledLink = styled(Link)(() => ({
  color: KEPPEL,
  textDecoration: 'underline',
  cursor: 'pointer'
}));

interface FallbackComponentProps extends FallbackProps {
  resetErrorBoundary: () => void;
  children?: ReactNode;
}

function Fallback({ error, children }: FallbackComponentProps): JSX.Element {
  return (
    <div role="alert">
      <h2>Uh-oh!😔 Please pardon the mesh.</h2>
      <div
        style={{
          backgroundColor: '#1E2117',
          color: '#FFFFFF',
          padding: '.85rem',
          borderRadius: '.2rem',
          marginBlock: '.5rem'
        }}
      >
        <code>{(error as Error).message}</code>
      </div>
      <ErrorMessage>
        We apologize for the inconvenience. The issue may be on our end. If troubleshooting doesn't
        work, please check out our support channels{' '}
        <StyledLink href="https://discuss.layer5.io/" target="_blank" rel="noopener noreferrer">
          Discuss Forum
        </StyledLink>{' '}
        {' or '}
        <StyledLink href="https://slack.layer5.io/" target="_blank" rel="noopener noreferrer">
          Slack
        </StyledLink>
      </ErrorMessage>
      <Box>{children}</Box>
    </div>
  );
}

const reportError = (error: Error, info: { componentStack: string }): void => {
  // This is where you'd send the error to Sentry, etc
  console.log('Error Caught Inside Boundary --reportError', error, 'Info', info);
};

interface ErrorBoundaryProps {
  children: ReactNode;
}

export const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  return (
    <ReactErrorBoundary FallbackComponent={Fallback} onError={reportError}>
      {children}
    </ReactErrorBoundary>
  );
};

interface WithErrorBoundaryProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: ComponentType<any>;
  errorHandlingProps?: ErrorBoundaryProps;
}

export const WithErrorBoundary: React.FC<WithErrorBoundaryProps> = ({
  Component,
  errorHandlingProps = { children: null }
}: WithErrorBoundaryProps): JSX.Element => {
  return (
    <ErrorBoundary {...errorHandlingProps}>
      <Component />
    </ErrorBoundary>
  );
};

interface WithSuppressedErrorBoundaryProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: ComponentType<any>;
}

export const withSuppressedErrorBoundary: React.FC<WithSuppressedErrorBoundaryProps> = ({
  Component
}: WithSuppressedErrorBoundaryProps): JSX.Element => {
  return (
    <ReactErrorBoundary FallbackComponent={Fallback} onError={reportError}>
      <Component />
    </ReactErrorBoundary>
  );
};
