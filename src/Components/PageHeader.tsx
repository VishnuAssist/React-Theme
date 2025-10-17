import { Typography, Button, Grid, ButtonGroup } from '@mui/material';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from "@dr.pogodin/react-helmet";
interface PageHeaderProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  btntitle?: string;
  btntitle2?: string;
  onActionClick?: () => void;
  onActionClick2?: () => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  icon,
  btntitle,
  onActionClick,
  btntitle2,
  onActionClick2
}) => {
  return (
    <>
         <Helmet>
        <title>{title}</title>
      </Helmet>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid>
            <motion.h1
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          >
            <Typography sx={{ fontSize: '24px', fontWeight: '800' ,    fontFamily: "'Borel', sans-serif",}}>
            {title}</Typography>
          </motion.h1>
          <motion.h1
            style={{
              overflow: 'hidden',
              whiteSpace: 'noWrap',
              // color: 'white'
            }}
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          >
            <Typography sx={{ fontSize: '16px', fontWeight: '1000' ,fontFamily: "'Jura', sans-serif", }}>
              {/* FarmFusion – Everything farm-related in one place */}
              {/* TrackMyFarm */}
                 {description
                ? description
                : 'CattleSync – Everything farm-related in one place'}
            </Typography>

            
          </motion.h1>
        
        </Grid>
        <Grid component={ButtonGroup}>
          {' '}
          {btntitle && (
            <Button
              sx={{ mt: { xs: 2, md: 0 },p:1.5,borderRadius:"30px" }}
              variant="contained"
              startIcon={icon}
              onClick={onActionClick}
            >
              {btntitle}
            </Button>
          )}
          {btntitle2 && (
            <Button
              sx={{ mt: { xs: 2, md: 0 } }}
              variant="contained"
              // startIcon={icon}
              onClick={onActionClick2}
            >
              {btntitle2}
            </Button>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default PageHeader;
