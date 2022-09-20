import {
  Button,
  Grid,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { BiTask } from "react-icons/bi";
import { FaRetweet, FaTable } from "react-icons/fa";
import { RiDashboard3Line, RiEyeOffFill, RiUserAddFill } from "react-icons/ri";
import { TbArrowBigLeft, TbArrowBigRight, TbFilterOff } from "react-icons/tb";
import { FormLead } from "../../components/FormLead";
import { ModalSimple } from "../../components/modal";
import { TableList } from "../../components/TableList";
import { useFetchAll } from "../../hook/FetchAll";
import { useFetchDomains } from "../../hook/FetchDomains";
import { Midias } from "../../types/Midas";

export const Home = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const { domains } = useFetchDomains(["SERVICE", "ORIGIN"]);
  const { dataList } = useFetchAll<Midias[]>("midias");

  return (
    <>
      <Grid container padding={2}>
        <Grid item xs={12}>
          <Typography variant="h4">Leads</Typography>
        </Grid>
        <Grid item xs={12} paddingTop={3} alignItems="center">
          <TextField
            label="Buscar lead"
            variant="outlined"
            size="small"
            color="warning"
          />
          <Button variant="contained" sx={{ marginX: 1 }} color="warning">
            Pesquisar
          </Button>

          <Tooltip title="Voltar um dia">
            <IconButton>
              <TbArrowBigLeft size={21} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Hoje">
            <IconButton>
              <TbFilterOff size={21} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Avançar um dia">
            <IconButton>
              <TbArrowBigRight size={21} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Dashboard">
            <IconButton color="info">
              <RiDashboard3Line size={22} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Painel lead">
            <IconButton color="info">
              <FaTable size={20} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Incluir lead">
            <IconButton color="success" onClick={() => setOpenModal(true)}>
              <RiUserAddFill size={21} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Trocas">
            <IconButton color="warning">
              <FaRetweet size={21} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Trocas pendentes">
            <IconButton color="error">
              <FaRetweet size={21} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Filtrar">
            <IconButton>
              <BiTask size={21} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Não visualizado">
            <IconButton>
              <RiEyeOffFill size={21} />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item xs={12} paddingTop={2}>
          <TableList />
        </Grid>
      </Grid>

      <ModalSimple open={openModal} setOpen={setOpenModal}>
        <FormLead domains={domains} midia={dataList} />
      </ModalSimple>
    </>
  );
};
