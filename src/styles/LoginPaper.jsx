import { Paper, styled } from "@mui/material";

export const CustomPaper = styled(Paper)`
    display:flex;
    flex-direction:column;
    height: 25rem;
    width: 20rem;
    align-items:center;
    justify-content:center;
    gap: 1rem;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;    padding: 2rem;
    border-radius: 1rem;
`;