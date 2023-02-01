/* eslint-disable @next/next/no-img-element */
import { useState, FC, ReactNode } from 'react'
import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  useProSidebar,
} from 'react-pro-sidebar'
import { useTheme, Typography, Box, IconButton } from '@mui/material'
import { HomeOutlined, MenuOutlined } from '@mui/icons-material'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Routes } from 'utils'
import { tokens } from '../Theme'

const Item = ({
  title,
  to,
  icon,
  selected,
  setSelected,
}: {
  title: string
  to: string
  icon: ReactNode
  selected: string
  setSelected: Function
}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Link href={to} legacyBehavior>
        <Typography>{title}</Typography>
      </Link>
    </MenuItem>
  )
}

const Sidebar: FC = (): JSX.Element => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const router = useRouter()
  const { collapseSidebar, collapsed } = useProSidebar()
  const [selected, setSelected] = useState('Dashboard')

  return (
    <Box
      sx={{
        '& .ps-menu-root': {
          background: `${colors.primary[400]} !important`,
        },
        '& .ps-menuitem-root:active': {
          backgroundColor: 'transparent !important',
        },
        '& .ps-menu-button': {
          padding: '5px 35px 5px 20px !important',
        },
        '& .ps-menu-button:hover': {
          color: '#868dfb !important',
          backgroundColor: 'transparent !important',
        },
        '& .ps-active': {
          color: '#6870fa !important',
        },
      }}
    >
      <ProSidebar>
        <Menu>
          {/* LOGO AND MENU ICON*/}
          <MenuItem
            onClick={() => collapseSidebar()}
            icon={collapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: '10px 0 20px 0',
              color: colors.grey[100],
            }}
          >
            {!collapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINS
                </Typography>
                <IconButton onClick={() => collapseSidebar()}>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!collapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100x"
                  height="100px"
                  src="#"
                  style={{
                    cursor: 'pointer',
                    borderRadius: '50%',
                  }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: '10px 0 0 0' }}
                >
                  Admin User
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Survey Super Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={collapsed ? undefined : '10%'}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: '15px 0 5px 20px' }}
            >
              Pages
            </Typography>
            {Routes.map((route: any, parentIndex: number) => {
              const { title, icon: Icon, link } = route
              return (
                <Item
                  key={`${parentIndex}-${title}`}
                  title={title}
                  to={link}
                  icon={<Icon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              )
            })}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  )
}

export default Sidebar
