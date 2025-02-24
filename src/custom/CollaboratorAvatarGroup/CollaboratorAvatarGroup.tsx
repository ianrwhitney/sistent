import { ExpandMore } from '@mui/icons-material';
import { MouseEvent, useState } from 'react';
import { Avatar, AvatarGroup, Popover, Typography } from '../../base';
import { CLOUD_URL } from '../../constants/constants';
import { styled } from '../../theme';
import { CustomTooltip } from '../CustomTooltip';

interface User {
  name: string;
  avatar_url: string;
  border_color: string;
  user_id: string;
}

interface Users {
  [clientID: string]: User;
}

interface CollaboratorAvatarGroupProps {
  users: Users;
}

interface StyledAvatarProps {
  borderColor: string;
}
const StyledAvatar = styled(Avatar)<StyledAvatarProps>(({ theme, borderColor }) => {
  return {
    width: theme.spacing(4),
    height: theme.spacing(4),
    cursor: 'pointer',
    border: `1.25px solid ${borderColor} !important`
  };
});

const MoreAvatarButton = styled('div')(({ theme }) => ({
  width: theme.spacing(4.25),
  height: theme.spacing(4.25),
  border: '1px solid #fff',
  borderRadius: '50%',
  background: 'rgba(57, 102, 121, .9)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '-10px',
  zIndex: 0,
  '&:hover': {
    cursor: 'pointer'
  }
}));

const PopupAvatarWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  padding: '5px 15px 5px 10px',
  '&:hover': {
    cursor: 'pointer',
    background: '#cecece80 !important'
  }
});

const UserName = styled(Typography)({
  marginLeft: '10px',
  fontWeight: 600
});

const StyledPopover = styled(Popover)(() => ({
  '& .MuiPopover-paper': {
    marginTop: '10px',
    maxHeight: '331px'
  }
}));

const CollaboratorAvatarGroup = ({ users }: CollaboratorAvatarGroupProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const openInNewTab = (url: string): void => {
    window.open(url, '_blank', 'noreferrer');
  };

  const handleClick = (event: MouseEvent<HTMLDivElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const totalUsers = Object.entries(users).length;
  const visibleAvatars = 4;

  return (
    <AvatarGroup max={visibleAvatars + 1}>
      {Object.entries(users)
        .slice(0, visibleAvatars)
        .map(([clientID, user]) => {
          return (
            <CustomTooltip key={clientID} title={user.name} arrow>
              <StyledAvatar
                key={clientID}
                alt={user.name}
                src={user.avatar_url}
                borderColor={user.border_color}
                style={{
                  border: `1.25px solid ${user.border_color} !important`
                }}
                imgProps={{ referrerPolicy: 'no-referrer' }}
                onClick={() => openInNewTab(`https://${CLOUD_URL}/user/${user.user_id}`)}
              />
            </CustomTooltip>
          );
        })}
      {totalUsers > visibleAvatars && (
        <>
          <MoreAvatarButton onClick={handleClick} aria-describedby="user-popover">
            {anchorEl ? (
              <ExpandMore fill="#fff" width={20} height={20} style={{ marginLeft: '4px' }} />
            ) : (
              <Typography variant="body2" style={{ color: '#fff', fontSize: '12px' }}>
                {`+${totalUsers - visibleAvatars}`}
              </Typography>
            )}
          </MoreAvatarButton>
          <StyledPopover
            id="user-popover"
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left'
            }}
          >
            {Object.entries(users)
              .slice(visibleAvatars, totalUsers)
              .map(([clientID, user]) => (
                <PopupAvatarWrapper
                  key={clientID}
                  onClick={() => openInNewTab(`https://${CLOUD_URL}/user/${user.user_id}`)}
                >
                  <StyledAvatar
                    alt={user.name}
                    src={user.avatar_url}
                    borderColor={user.border_color}
                    style={{
                      border: `1.25px solid ${user.border_color} !important`
                    }}
                    imgProps={{ referrerPolicy: 'no-referrer' }}
                  />
                  <UserName variant="body1">{user.name}</UserName>
                </PopupAvatarWrapper>
              ))}
          </StyledPopover>
        </>
      )}
    </AvatarGroup>
  );
};

export default CollaboratorAvatarGroup;
